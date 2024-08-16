import React from "react";
import './card.css'



// export function Home({img,name,age}){
    

//     return(
//         <>
//         <div className="main">
//             <img src={img}></img>
//             <h1>{name}</h1>
//             <h2>{age}</h2>
//         </div>
        
//         </>
//     )
// }



export function Home({name,colification}){

    return(
        <>
        <div className="main">
            <h1>{name}</h1>
            <h2>{colification}</h2>
        </div>
        </>
    )
}