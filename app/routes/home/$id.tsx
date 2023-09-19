import JsxRenderer from "../../components/jsxRenderer";
import type { ActionFunction, LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getSession } from "../../session.server";
import { getPrivacyPolicy, updatePrivacyPolicy} from "~/models/privacy-policies";
import { useState, useEffect } from "react"
import { GPTChat } from "app/session.server";
import invariant from "tiny-invariant";
import { Form, useActionData } from "@remix-run/react";
import HEADLINE from "../../components/headline"
import Checkbox from "../../components/checkbox"

export async function loader({ request, params }: LoaderArgs) {
    
    const session = await getSession(request)

    var userId = session.get("userId")
    let freeUser = false;
    
    if (typeof userId === 'undefined') {
        userId = "aa0fe58c-afc8-4fde-ae85-cb7c8c94698f";
        freeUser = true;
    }

    invariant(params.id, "noteId not found");

    const data = await getPrivacyPolicy({ id : params.id , userId })

    return data
};

export let action: ActionFunction = async ({ request }) => {
    let formData = await request.formData();
    let id = formData.get("id");

    // Regular Data
    let website = formData.get("website");
    let product = formData.get("product");
    let contact = formData.get("contact");
    let format = formData.get("format");
    let advanced = formData.get("advanced");

    // Advanced Data
        // Data Collection 
        let advertising = formData.get("advertising");
        let analytics = formData.get("analytics");
        let cookies = formData.get("cookies");
        let deviceInfo = formData.get("deviceInfo");
        let ipAddress = formData.get("ipAddress");
        let location = formData.get("location");
        let mailAddress = formData.get("mailAdress");
        let personalInformation = formData.get("personalInformation");
        let socialMedia = formData.get("socialMedia");
        let thirdParty = formData.get("thirdParty");
        let tracking = formData.get("tracking");
        let furtherDatapoints = formData.get("furtherDatapoints");
        let dataCollection = "";

        if (advertising) { dataCollection += ", Advertising"; }
        if (analytics) { dataCollection += ", Analytics"; }
        if (cookies) { dataCollection += ", Cookies"; }
        if (deviceInfo) { dataCollection += ", Device Info"; }
        if (ipAddress) { dataCollection += ", IP Address"; }
        if (location) { dataCollection += ", Location"; }
        if (mailAddress) { dataCollection += ", Mail Address"; }
        if (personalInformation) { dataCollection += ", Personal Information"; }
        if (socialMedia) { dataCollection += ", Social Media"; }
        if (thirdParty) { dataCollection += ", Third Party"; }
        if (tracking) { dataCollection += ", Tracking"; }
        if (furtherDatapoints) { dataCollection += (", " + furtherDatapoints); }

        // Data Usage
        let provideOperateMaintain = formData.get("provideOperateMaintain");
        let improvePersonalizeExpand = formData.get("improvePersonalizeExpand");
        let contactUser = formData.get("contactUser");
        let furtherDataUsage = formData.get("furtherDataUsage");

        let dataUsage = "";

        if (provideOperateMaintain) { dataUsage += ", Provide, operate, and maintain our our Service"; }
        if (improvePersonalizeExpand) { dataUsage += ", Improve, personalize, and expand our Service"; }
        if (contactUser) { dataUsage += ", Contact the User for Updates & Feedback"; }
        if (furtherDataUsage) { dataUsage += (", " + furtherDataUsage); }



    //check if User is logged in or not
    const session = await getSession(request)
    var userId = session.get("userId")

    if (typeof userId === 'undefined') {
        userId = "aa0fe58c-afc8-4fde-ae85-cb7c8c94698f";
    }

    let messages = [];

    messages.push({
        role: 'system',
        content: "You are a Privacy Police Expert. You write privacy policies that are bulletproof. Given the information that User inputs you generate a top notch privacy policy. Keep it short and general & Output it in the Format that the User specifies. If the Format is HTML make sure that you Output the Privacy Police in this Format: <article class=\"prose max-w-[1400px] mr-auto ml-auto pl-8 pr-8 pb-6 pt-6 overflow-auto\"><h2>Header2</h2><p>Paragraph</p></article>"
    });

    let query = `Website: ${website}, Product: ${product}, contact: ${contact}, format: ${format},`

    if (advanced != null) {
        query += (dataCollection = "")
    }
    else {
        query += ` Data Collection & Usage: Full`
    }

    messages.push({
        role: 'user',
        content: query
    });


    const message = await GPTChat(messages);

    let questions = {"website" : website, "product" : product}

    const PrivacyPolicy = {
        userId: userId,
        questions: JSON.stringify(questions),
        privacyPolicy: message,
        id: id
    };

    await updatePrivacyPolicy(PrivacyPolicy);

    return message
}

export default function App() {
    const actionData = useActionData<typeof action>();
    const loaderData = useLoaderData<typeof loader>();

    const [copySuccess, setCopySuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [advancedOptions, setAdvancedOptions] = useState(false)
    
    // load Privacypolice from Supabase
    let loaderDataPrivacyPolice = JSON.parse(loaderData?.privacyPolicy)
    loaderDataPrivacyPolice = loaderDataPrivacyPolice[loaderDataPrivacyPolice.length - 1].content;
    const [PrivacyPolicy, setPrivacyPolicy] = useState(loaderDataPrivacyPolice)

    // update Privacypolice from Actionfunction
    useEffect(() => {
        if (actionData) {
            setPrivacyPolicy(actionData[actionData.length - 1].content)
            setIsLoading(false);
            console.log(actionData)
        }
      }, [actionData])
    
    return(
        <>
        <HEADLINE h1="Test" p="kleintest"></HEADLINE>
        <div className="container">
            <div className="alert mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                <span>Under no circumstances should the generated privacy policy be considered a legally binding document. The provided privacy policy is offered "as is" and without any form of warranty. SolopreneurProTools.com holds no responsibility for any claims, damages, or liabilities that may arise. Its usage is at your own risk. It is strongly advised to seek legal counsel from professionals for proper guidance.</span>
            </div>
            <div className="flex-grow grid grid-cols-1 lg:grid-cols-3 gap-4 pb-4">
                    <Form method="post" className="rounded-2xl border ">
                        <div className="p-4 items-left"> 

                            {/* Standard Form */}
                            <p className="ml-2">Your Website:</p>
                            <input id="website" name="website" type="text" placeholder="SolopreneurProTools.com" className="input input-bordered w-full ml-2 mr-2 mb-2" />
                            <p className="ml-2">Productname:</p>
                            <input id="product" name="product" type="text" placeholder="SolopreneurProTools" className="input input-bordered w-full ml-2 mr-2 mb-2" />
                            <p className="ml-2">Contact Info:</p>
                            <input id="contact" name="contact" type="text" placeholder="info@solopreneurprotools.com" className="input input-bordered w-full ml-2 mr-2 mb-2" />

                            <p className="ml-2">Format:</p>
                            <select id="format" name="format" className="select select-bordered w-full ml-2 mr-2 mb-4">
                                <option defaultValue={"HTML"}>HTML</option>
                                <option value={"Plain Text"}>Plain Text</option>
                            </select>

                            {/* Advanced Form */}

                            <div className="w-full flex justify-between"> 
                                <div className="relative flex gap-x-3 ml-2 mb-2">
                                    <div className="flex h-6 items-center">
                                        <input id="advanced" name="advanced" type="checkbox" checked={advancedOptions} onChange={() => setAdvancedOptions(!advancedOptions)} className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />        
                                    </div>
                                    <div className="text-sm leading-6">
                                        <label className="font-medium text-gray-900">Advanced Options</label>
                                    </div>
                                </div>
                                {!advancedOptions && (
                                    <button type="submit" className="btn btn-primary" onClick={() => setIsLoading(true)}>Generate</button>
                                )}
                            </div>
                            
                            {advancedOptions && (
                                <>  
                                    <p className="ml-2">Data Collection:</p>
                                        
                                    <div className="border mb-2 ml-2 p-2 rounded-2xl">
                                         <div className="lg:tooltip" data-tip="Advertising">
                                             <Checkbox name="advertising" title="Advertising"></Checkbox>
                                         </div>
                                         <div className="lg:tooltip" data-tip="Analytics">
                                             <Checkbox name="analytics" title="Analytics"></Checkbox>
                                         </div>
                                         <div className="lg:tooltip" data-tip="Cookies">
                                             <Checkbox name="cookies" title="Cookies"></Checkbox>
                                         </div>
                                         <div className="lg:tooltip" data-tip="Device Info">
                                             <Checkbox name="deviceInfo" title="Device Info"></Checkbox>
                                         </div>
                                         <div className="lg:tooltip" data-tip="IP Address">
                                             <Checkbox name="ipAddress" title="IP Address"></Checkbox>
                                         </div>
                                         <div className="lg:tooltip" data-tip="Location">
                                             <Checkbox name="location" title="Location"></Checkbox>
                                         </div>
                                         <div className="lg:tooltip" data-tip="Mail Adress">
                                             <Checkbox name="mailAdress" title="Mail Adress"></Checkbox>
                                         </div>
                                         <div className="lg:tooltip" data-tip="Personal Information">
                                             <Checkbox name="personalInformation" title="Personal Information"></Checkbox>
                                         </div>
                                         <div className="lg:tooltip" data-tip="Social Media">
                                             <Checkbox name="socialMedia" title="Social Media"></Checkbox>
                                         </div>
                                         <div className="lg:tooltip" data-tip="Third Party">
                                             <Checkbox name="thirdParty" title="Third Party"></Checkbox>
                                         </div>
                                         <div className="lg:tooltip" data-tip="Tracking">
                                             <Checkbox name="tracking" title="Tracking"></Checkbox>
                                         </div>    
                                    </div>
                                    <p className="ml-2">Further Datapoints:</p>
                                    <input id="furtherDatapoints" name="furtherDatapoints" type="text" placeholder="Adress, Name, ..." className="input input-bordered w-full ml-2 mr-2 mb-2" />
                                    
                                    
                                    <p className="ml-2">Data Usage:</p>
                                    <div className="border mb-2 ml-2 p-2 rounded-2xl">
                                        <div className="lg:tooltip" data-tip="Provide, operate, and maintain our website and product;">
                                            <Checkbox name="provideOperateMaintain" title="Provide, operate, and maintain our our Service;"></Checkbox>
                                        </div>
                                        <div className="lg:tooltip" data-tip="Improve, personalize, and expand our website and product;">
                                            <Checkbox name="improvePersonalizeExpand" title="Improve, personalize, and expand our Service;"></Checkbox>
                                        </div>
                                        <div className="lg:tooltip" data-tip="Contact the User for Updates & Feedback;">
                                            <Checkbox name="contactUser" title="Contact the User for Updates & Feedback;"></Checkbox>
                                        </div>
                                    </div>
                                    <p className="ml-2">Further Usage:</p>
                                    <input id="furtherDatausage" name="furtherDataUsage" type="text" placeholder="Usage1, Usage2, ..." className="input input-bordered w-full ml-2 mr-2 mb-2" />
                                    <div className="w-full flex justify-end">
                                        <button type="submit" className="btn btn-primary" onClick={() => setIsLoading(true)}>Generate</button>
                                    </div>
                                </>
                            )}

                            
                        </div>
                        
                        {/* Backend needs */}

                        <input type="hidden" name="id" id="id" value={loaderData?.id}></input>
                    </Form>
                    
                    {/* Mockup */}

                    <div className="mockup-browser bg-base-300 col-span-1 lg:col-span-2">
                        {/* Copy SVG */}
                        <div className="relative">
                            {copySuccess == false &&
                                <svg className="absolute top-4 right-4 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" onClick={() => {navigator.clipboard.writeText(jsxCode); setCopySuccess(true); setTimeout(() => setCopySuccess(false), 1000);}}><path fill="currentColor" d="M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z"/></svg>
                                }
                            {copySuccess == true &&
                                <svg className="absolute top-4 right-4 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18"/></svg>
                                }
                        </div>
                        
                        <div className="mockup-browser-toolbar">
                            <div className="input">https://SolopreneurProTools.com</div>
                        </div>
                        <div className="p-4 overflow-auto">
                            {isLoading 
                                ? <div className="flex justify-center items-center"><span className="loading loading-spinner loading-lg"></span></div>
                                : <JsxRenderer jsxString={PrivacyPolicy}></JsxRenderer>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
    

  