import { useState } from "react"

export default function Checkbox({ name, title } : { name: string; title: string}) {
    const [checked, setChecked] = useState(false); 

    return(
        <div className="relative flex gap-x-3 ml-2">
            <div className="flex h-6 items-center">
                <input id={name} name={name} type="checkbox" checked={checked} onChange={() => setChecked(!checked)} className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />        
            </div>
            <div className="text-sm leading-6">
                <label className="font-medium text-gray-900">{title}</label>
            </div>
        </div>
    );
}