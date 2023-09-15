import Chat from "../../components/chat";
import JsxRenderer from "../../components/jsxRenderer";
import type { ActionFunction, LoaderArgs, MetaFunction } from "@remix-run/node";
import { getSession } from "../../session.server";
import { getFormGenerator } from "~/models/form-generator.server";
import invariant from "tiny-invariant";
import { useLoaderData, Form} from "@remix-run/react";



export async function loader({ request, params }: LoaderArgs) {
    
    const session = await getSession(request)

    var userId = session.get("userId")
    let freeUser = false;
    
    if (typeof userId === 'undefined') {
        userId = "aa0fe58c-afc8-4fde-ae85-cb7c8c94698f";
        freeUser = true;
    }

    invariant(params.id, "noteId not found");

    const data = await getFormGenerator({ id : params.id , userId })

    console.log("data", data)

    let messages = "";
    if ( data ) { messages = JSON.parse(data?.messages) }
    else { console.log("null");}

    console.log("messages", messages)

    return { messages }
    };

export let action: ActionFunction = async ({ request }) => {
    let formData = await request.formData();
    let content = formData.get("content");
    let messages = formData.get("messages");
    const session = await getSession(request)

    var userId = session.get("userId")
    
    if (typeof userId === 'undefined') {
        userId = "aa0fe58c-afc8-4fde-ae85-cb7c8c94698f";
    }

    console.log("content & messages", content, messages)
    console.log("userId", userId)
    return ""
}

export default function App() {
    const data = useLoaderData<typeof loader>();
    const messages = data["messages"]

    function extractHTML(inputString: string): string {
        const htmlPattern = /```html([\s\S]*?)```/g;
        const matches = inputString.match(htmlPattern);
        if (matches !== null) {
            let result = matches[0];
            // Remove the ```html and ``` tags
            result = result.replace('```html', '');
            result = result.replace('```', '');
            // Trim extra spaces or newlines at the start and end
            result = result.trim();
            return result;
        } else {
            return inputString;
        }
    }

    const jsxCode = extractHTML(messages[messages.length - 1]?.content);

    

    return(
        <div className="container flex-grow grid grid-cols-1 lg:grid-cols-3 gap-4 overflow-auto">
                <Form className="rounded-2xl border overflow-auto">
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