import { useState, useEffect } from "react";
import { requireUserId } from "~/session.server";
import { Form, useActionData } from "@remix-run/react";

import Chat from "./chat";
import Database from "./database";

import type { ActionFunction, LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getSQLQueriesListItems, createSQLQueries, updateSQLQuery } from "../../models/sqlthroughai.server"
import { getDatabases, createDatabase, updateDatabase, deleteDatabase } from "../../models/sqlthroughai.server"
import { getConnections } from "../../models/sqlthroughai.server"
import { GPTChat } from "../../session.server"


type LoaderData = {
  userId: string;
  Queries: object;
  Databases: object;
  Connections: object;
};

type actionData = {
  Query: object;
};

export async function loader({ request }: LoaderArgs) {
  const userId = await requireUserId(request);
  const Queries = await getSQLQueriesListItems({ userId })
  const Databases = await getDatabases({ userId })
  const Connections = await getConnections({ userId })

  const loaderData: LoaderData = {userId,Queries,Databases,Connections};

  return loaderData
};


export let action: ActionFunction = async ({ request }) => {
  //Get Form Data
  let formData = await request.formData();
  let _action = formData.get("_action");
  let userId = await requireUserId(request)
  let messages = formData.get("messages");
  let content = formData.get("content");
  let chat = formData.get("chat");
  let databases = formData.get("databases");
  let sqlType = formData.get("sqlType");


  let Query = {} 

  // Chat Interaction
  if (_action == "ChatSend") {
    Query["id"] = chat
    if (chat !== null && chat !== "new" ) {
      messages = JSON.parse(messages)
      messages.push({
        'role': 'user',
        'content': content
      });
      let response = await GPTChat(messages)

      messages = JSON.stringify(response)

      let id = chat
      userId = userId.toString()
      const updatedQuery = await updateSQLQuery({messages, id, userId})

      Query = updatedQuery
    }
    else {
      messages = JSON.parse(messages)
      databases = JSON.parse(databases)

      const result: { title: string; columns: { [s: string]: string | null }[] }[] = databases.map((db) => {

      const databaseParsed = JSON.parse(db.database);

      const columns = databaseParsed.map((colData: { column: string | null; type: string | null }) => ({
          [`${colData.column}`]: colData.type,
          }));

      return {
          title: db.title,
                  columns,
        };
      });

      const databaseString = `Databases: ${JSON.stringify(result)}`;

      messages.push({
        'role': 'system',
        'content': databaseString 
      });

      messages.push({
        'role': 'system',
        'content': "Given the Databases answer the Questions of the user by providing a " +sqlType+ "Statement. Only Output the " +sqlType+ "Statement."
      });

      messages.push({
        'role': 'user',
        'content': content
      });

      let response = await GPTChat(messages)

      messages = JSON.stringify(response)

      const title:string = content
      const createdQuery = await createSQLQueries({messages,userId,title})
      
      Query = createdQuery
    }
  }
  else if (_action == "saveDatabase") {
    let database = formData.get("databaseEdit");
    let title = formData.get("databaseTitle");
    let id = formData.get("databaseId");

    if ( id === "new") {
      const create = await createDatabase({title, database, userId})
    }
    else {
      const update = await updateDatabase({id, title, database, userId})

    }
    Query.id = "new"
    let messages = [{
      role: 'assistant',
      content: `How can i help you?`
    },]
    Query.messages = JSON.stringify(messages)
    Query.userId = userId
  }
  else if ( _action == "deleteDatabase" ) {
    let id = formData.get("databaseId");
    deleteDatabase({id, userId})
    Query.id = "new"
    let messages = [{
      role: 'assistant',
      content: `How can i help you?`
    },]
    Query.messages = JSON.stringify(messages)
    Query.userId = userId
  }

  //Build actionData and return
  const actionData: actionData = {
    Query: Query,
  };

  return actionData  
}

export default function Index() {
  const actionData = useActionData<typeof action>();
  const loaderData = useLoaderData<typeof loader>();
  const userId = loaderData.userId

  const [displayQuery, setDisplayQuery] = useState(true)
  const [chat, setChat] = useState("new")
  const [base, setBase] = useState("new")

  
  //Set initial Messages & Database
  let [messages, setMessages] = useState([{
    role: 'assistant',
    content: `How can i help you?`
  },]); 

  const [database, setDatabase] = useState({
    id: "new",
    title: "New Database Table",
    userId: userId,
    database: [{column: 'Column1',
              type: `string`}]
  }); 

  
  //Change chat to new when new Chat is needed 
  useEffect(() => {
    if (base == "new") {
        setDatabase({ id: "new",title: "New Database Table",userId: userId,database: [{column: 'Column1',type: `string`}]})
    }
  }, [base])

  useEffect(() => {
    if (chat == "new") {
        setMessages([{
          role: 'assistant',
          content: `How can i help you?`
        },])
    }
  }, [chat])


  //Change Messages after Actionfunction ran 
  useEffect(() => {
    if (actionData) {
        setMessages(JSON.parse(actionData.Query["messages"]))
        setChat(actionData.Query["id"])
        setDisplayQuery(true)
    }
  }, [actionData])

  function changeChat(item) {
    setMessages(JSON.parse(item["messages"]))
    setChat(item.id)
    setDisplayQuery(true)
    return "";
  }

  function changeDatabase(item) {
      if (typeof item["database"] === "string") {
        item["database"] = JSON.parse(item["database"]);
      }
       setDatabase(item)
       setBase(item.id)
       return "";
    }
  
  
  return(
    <Form method="post" className="container flex-grow overflow-auto grid grid-cols-1 grid-rows-2 lg:grid-cols-6 gap-4 mb-2">

        <div className="bg-base-200 col-span-1 row-span-2 rounded-2xl p-4 overflow-auto">
          <div className="flex-grow">
            <div onClick={() => {setChat("new"); setDisplayQuery(true)}}
              className="btn mb-2 rounded-2xl text-left p-2 hover:bg-base-300 active:border-alt-2 w-full" >
              New SQL
            </div>
            {loaderData.Queries.map((item) => (
              <div key={item.id}>
                <div key="{item.id}" title={item.title} onClick={() => {changeChat(item); setDisplayQuery(true)}}
                  className="btn mb-2 rounded-2xl text-left p-2 hover:bg-base-300 active:border-alt-2 w-full truncate " >
                    {item.title.length > 30 ? item.title.substring(0, 18) + "..." : item.title}
                </div>
              </div>
            ))}
          </div>
        </div>
        


          
        {displayQuery == true && 
        <div className="bg-base-200 col-span-1 lg:col-span-4 row-span-2 rounded-2xl">
          <Chat id={chat} messages={messages} sqlthroughai={chat}></Chat>     
        </div>
        }
        {displayQuery == false && 
        <div className="bg-base-200 col-span-1 lg:col-span-4 row-span-2 rounded-2xl">
          <Database key={database.id} database={database} connections={loaderData.Connections}/>
        </div>
        }


        

        <div className="bg-base-200 col-span-1 row-span-2 rounded-2xl p-4 overflow-auto">
            <div className="flex-grow overflow-auto">
              <div onClick={() => {setDisplayQuery(false); setBase("new")}}
                className="btn mb-2 rounded-2xl text-left p-2 hover:bg-base-300 active:border-alt-2 w-full" >
                New DB Table
              </div>
              {loaderData.Databases.map((item) => (
                <div key={item.id}>
                  <div onClick={() => {setDisplayQuery(false); changeDatabase(item)}} title={item.title}
                    className="btn mb-2 rounded-2xl text-left p-2 hover:bg-base-300 active:border-alt-2 w-full" >
                    {item.title.length > 30 ? item.title.substring(0, 18) + "..." : item.title}                  
                  </div>
                </div>
              ))}
            </div>
        </div>

        <input type="hidden" value={userId}                                   name="userId"></input>
        <input type="hidden" value={chat}                                     name="chat"></input>
        <input type="hidden" value={messages.toString()}                      name="messages"></input>
        <input type="hidden" value={base}                                     name="base"></input>
        <input type="hidden" value={JSON.stringify(database)}                 name="base"></input>
        <input type="hidden" value={JSON.stringify(loaderData.Databases)}     name="databases"></input>

    </Form>
  );
}
