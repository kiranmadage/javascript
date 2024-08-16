import React, { useEffect, useState } from "react";


export function Effect (){

let [color,setColor]=useState(1)

function Change(){
    setColor(color+1)
}

useEffect(
    ()=>{
        console.log('changes')
    },[Change]
)
return(
    <>
    <h1 onClick={Change}>{color}</h1>

    </>
)
}