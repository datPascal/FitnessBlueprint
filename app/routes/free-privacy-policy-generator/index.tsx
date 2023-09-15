import type { LoaderArgs } from "@remix-run/node";
import { getSession } from "../../session.server";
import { createPrivacyPolicy } from "~/models/privacy-policies";
import type { PrivacyPolicy } from "~/models/privacy-policies";
import { redirect } from "@remix-run/node";

//init new privacypolice

export async function loader({ request }: LoaderArgs) {
    const session = await getSession(request)
    var userId = session.get("userId")

    if (typeof userId === 'undefined') {
        userId = "aa0fe58c-afc8-4fde-ae85-cb7c8c94698f";
    }

    const messages = [
        {
            role: 'system',
            content: `
            <article class="prose max-w-[1400px] mr-auto ml-auto pl-8 pr-8 pb-6 pt-6 overflow-auto">
                <h2>Here you will see your Privacy Police once it's ready.</h2>
                <p>If you find our tool helpful, please do not hesitate to share it with others. Your support means everything to us.</p>
            </article>
            `
        },
    ];

    const PrivacyPolicy: PrivacyPolicy = {
        userId: userId,
        questions: "",
        privacyPolicy: JSON.stringify(messages),
        id: require('uuid').v4(),
    };

    const newPrivacyPolicy = await createPrivacyPolicy(PrivacyPolicy);

    console.log("newPrivacyPolicyId", newPrivacyPolicy.id)

    return redirect(`/free-privacy-policy-generator/${newPrivacyPolicy.id}`);
    
}


export default function App() {

    return(
        <div></div>
    );
}
    