import Chat from "../../components/chat";
import JsxRenderer from "../../components/jsxRenderer";
import type { ActionFunction, LoaderArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData, Form} from "@remix-run/react";
import { getSession } from "../../session.server";
import { GPTChat } from "app/session.server";
import { createFormGenerator } from "~/models/form-generator.server";
import type { FormGenerator } from "~/models/form-generator.server";
import { redirect } from "@remix-run/node";



export async function loader () {
    const messages = [
        {
            role: 'system',
            content: 'You are a developer that knows css perfectly. You build the UI that the User aks for. You Output only the HTML Code that you generated and nothing else. Example: {Question: Genrate a div that has a min height of 500px that shows the text /"This is where you will see your Form./" big and centered inside. ,Answer: <div className="min-h-500px flex items-center justify-center"><p className="text-3xl">This is where you will see your Form.</p></div>'
        },
        {
            role: 'assistant',
            content: 'What can i do for you?'
        }
    ];
    return { messages }
};

export let action: ActionFunction = async ({ request }) => {
    let formData = await request.formData();
    let content = formData.get("content");
    let messages = JSON.parse(formData.get("messages"));
    const session = await getSession(request)

    var userId = session.get("userId")

    if (typeof userId === 'undefined') {
        userId = "aa0fe58c-afc8-4fde-ae85-cb7c8c94698f";
    }

    if (userId != "c3b0d9ea-6d71-4d9a-bbdc-26f8b53dba4a") {
        console.log("noAccess")
        return "noAccess"
    }

    messages.push({
        role: 'user',
        content: content
    });

    let message = await GPTChat(messages);

    console.log("message", message)

    const formGenerator: FormGenerator = {
        userId: userId,
        messages: JSON.stringify(message),
        id: require('uuid').v4(),
    };

    const newFormGenerator = await createFormGenerator(formGenerator);

    console.log("newFormGeneratorId", newFormGenerator.id)

    return redirect(`/free-daisyui-form-generator/${newFormGenerator.id}`);
    
}

export default function App() {
    const data = useLoaderData<typeof loader>();
    const messages = data["messages"]
    
    const jsxCode = `
        <div class="min-h-500px flex items-center justify-center">
        <p class="text-3xl">This is where you will see your Form.</p>
        </div>
        `;
        

    return(
        <div className="container flex-grow overflow-auto grid grid-cols-1 lg:grid-cols-3 gap-4">
                
                <Form className="rounded-2xl border">
                    <Chat messages={messages}/>
                </Form>
                <div className="mockup-browser bg-base-300 col-span-1 lg:col-span-2">
                    <div className="mockup-browser-toolbar">
                        <div className="input">https://SolopreneurProTools.com</div>
                    </div>
                    <div className="p-4">
                        <JsxRenderer jsxString={jsxCode}></JsxRenderer>
                    </div>
                </div>
        </div>

        
    );
}
    
    
