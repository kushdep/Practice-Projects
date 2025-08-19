'use client'

import { useFormStatus } from "react-dom"

export default function FormSubmit(){
    const status =useFormStatus()

    if(status.pending){
        return<p>Creating Post...</p>        
    }
    return <>
    <button type="reset">Reset</button>
          <button>{status.pending?"Creating Post...":"Create Post"}</button>
    </>
}