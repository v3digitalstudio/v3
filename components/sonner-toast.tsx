"use client"

import { toast } from "sonner"
import { Button } from "./ui/button"
 
export function NewToast() {
    return (
        <Button onClick={() => toast('My first toast')}>
                Give me a toast
        </Button>
    )
}
