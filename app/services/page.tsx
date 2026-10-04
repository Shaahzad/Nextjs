"use client"
import { Button } from "@/components/ui/button"




export default function Page() {

        function Alert() {
            return alert("Hello")
        }

    return (
        <div className="flex items-center justify-center min-h-screen">
            <Button variant="outline" onClick={Alert}>Button</Button>
        </div>
    )
}