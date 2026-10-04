"use client"
import { useState } from "react"




export default function Page() {
    const [Amount, setAmount] = useState('')
    const [Percent, setPercent] = useState('')

    const CalFunction = () => {
        if (!Amount || !Percent) {
            return alert(!Amount ? "Please Enter Amount" : !Percent ? "Please Enter Percent" : "");
        }
        const result = (Number(Amount) * Number(Percent)) / 100
        if (isNaN(result)) {
            return alert("Please Enter Valid Number")
        }
        alert(`Result ${result}`)
    }

    return (
        <div className="flex flex-col justify-center items-center gap-4 min-h-screen min-w-screen">
            <input placeholder="Enter Amount" type="text" onChange={(e) => setAmount(e.target.value)} className="border border-amber-400 rounded-full pl-4 py-1 px-1" />
            <input placeholder="Enter Percent" type="text" onChange={(e) => setPercent(e.target.value)} className="border border-amber-400 rounded-full pl-4 py-1 px-1" />
            <input type="text" disabled value={100} className="border border-amber-400 rounded-full pl-4 py-1 px-1" />
            <button type="button" onClick={CalFunction} className="w-50 bg-amber-400 text-white font-medium p-1 rounded-full hover:bg-amber-500 transition-colors">
                Submit
            </button>
        </div>
    )
}