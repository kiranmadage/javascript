import React, { useState,useEffect } from "react";

export function Use(){

    
    const[name,setName]= useState( 'kiran')
        

  function Change(){
 setName('pradnya')
 }

useEffect(
    ()=>{
        console.log("changes")
    },[name]
 )


let [num,setNum]=useState(10)

 function Number(){
    setNum (num*2)
 }


 useEffect(
    ()=>{
        console.log("Number is chenge")
    },[num]
 )

return(

<>
<h1 onClick={Number}>{num}</h1>
<h1 onClick={Change}>{name}</h1>

</>

 )
}