import { useState, useEffect } from "react";

interface DatabaseProps {
  database:     {id: string;
                title: string;
                database: object;
                userId: string;};
  
  connections:  [{id: string;
                database1: string;
                database2: string;
                column1: string;
                column2: string;
                userId: string;},]
  }

const Database: React.FC<DatabaseProps> = ({ database, connections }) => {

  const [title, setTitle] = useState(database.title)
  const [loading, setLoading] = useState(false);
  const [databaseEdit, setDatabaseEdit] = useState<object[]>(database.database);
  const [showDone, setShowDone] = useState(false);

  console.log(database)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (!loading && showDone) {
      timeoutId = setTimeout(() => setShowDone(false), 1000); // Hide after 1 second
    }
    return () => clearTimeout(timeoutId);
  }, [loading, showDone]);

  useEffect(() => {
    if (loading) {
      const actionPromise = new Promise(resolve => {
        setTimeout(resolve, 2000); // 2 secs delay  
      });
  
      actionPromise.then(() => {
        setLoading(false);
        setShowDone(true);
      });
    }
  }, [loading]);

  function addColumn() {
    setDatabaseEdit([...databaseEdit, {column: null, type: null}])
    return "";
  }

  function deleteColumn(index:number) {
    console.log(databaseEdit)
    const updatedDatabaseEdit = [...databaseEdit];
    updatedDatabaseEdit.splice(index, 1);
    setDatabaseEdit(updatedDatabaseEdit);
    return "";
  }

  const changeColumn = (value: string, index: number, type: 'column' | 'type') => {
    const newArray = [...databaseEdit];
    newArray[index][type] = value;
    setDatabaseEdit(newArray);
  }

  return (
    <div className="flex flex-col h-full p-4">

      <div className="join ml-4 mr-4 text-lg sm:text-xl">
        <input onChange={(event) => setTitle(event.target.value)} name="databaseTitle" value={title} className="bg-base-200 w-full text-muted-foreground" />
        {database.id !== "new" && <button name="_action" value="deleteDatabase" type="submit" className="btn">Delete Table</button>}
      </div>
      

      <div className="divider mt-0 mb-0 w-full lg:divider-vertikal"></div>

      <div className="flex overflow-auto flex-grow my-auto pl-4 pr-4 lg:justify-around">
    
        <div className="rounded-2xl flex-grow w-5/5">
          <div className="flex-grow pt-4">
          {databaseEdit.map((item:object, index:number) => (
          <div key={index} className="grid grid-cols-6 gap-2 mb-2">
          <input 
              value={item.column}
              onChange={(e) => changeColumn(e.target.value, index, 'column')} 
              type="text" 
              placeholder="Column" 
              className="input w-full col-span-2" 
            />

          <div className="dropdown cursor-pointer flex items-center mx-auto">
            
            <div tabIndex={index} className="btn btn-square">🔗</div>

            <ul tabIndex={index} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Work in Progress</a></li>
            </ul> 

            
          </div>
              
            <select value={item.type} onChange={(e) => changeColumn(e.target.value, index, 'type')} className="select select-bordered w-full col-span-2">
              <option >String</option>
              <option>Integer</option>
              <option>Float</option>
              <option>id</option>
              <option>date</option>
              <option>bool</option>
            </select>

            <div tabIndex={index} className="btn btn-square" onClick={() => deleteColumn(index)}>❌</div>

          </div>
          ))}
          <div className="btn" onClick={() => addColumn()}>add Column</div>    
          </div>

        </div>
      </div>
      <input type="hidden" name="databaseId" value={database.id} ></input>
      <input type="hidden" name="databaseEdit" value={JSON.stringify(databaseEdit)} ></input>
      <div className="flex flex-row justify-end items-end">
        <div className="relative bottom-0 p-4">
        <div className="flex flex-row items-center gap-2">
            { loading && <div><span className="loading loading-dots loading-lg"></span></div> }
            { showDone && <div><span>✅</span></div> }
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5l-9-4m0 6c1.4 0 2.8 1.1 2.8 2.5V11c.6 0 1.2.6 1.2 1.3v3.5c0 .6-.6 1.2-1.3 1.2H9.2c-.6 0-1.2-.6-1.2-1.3v-3.5c0-.6.6-1.2 1.2-1.2V9.5C9.2 8.1 10.6 7 12 7m0 1.2c-.8 0-1.5.5-1.5 1.3V11h3V9.5c0-.8-.7-1.3-1.5-1.3Z"/></svg>                                
              <button name="_action" value="saveDatabase" type="submit" className="card-title relative group" onClick={() => setLoading(true)}>
                <span>Save</span>
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-blue-400 transition-all rounded group-hover:w-full"></span>
              </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Database;

