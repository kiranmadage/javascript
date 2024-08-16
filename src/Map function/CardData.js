import { Home } from "./Card";
import img from './cartoon.png'

// export function Data(){
//     const CardData =[

//         {
//             img:img,
//             name:"jerry",
//             age: "10 years"

//         }
//     ];
//     return(
//         <>
//        {
//         CardData.map(
//             (data)=>{
//                 return(
//                     <Home img={data.img} name={data.name} age={data.age}/>
//                 )
//             }
//         )
        
//        }
//         </>
//     )
// }


export function Data(){

const CardData=[
    {
        name:"kiran",
        colification: "ty.BCA"
    }
];


return(
    <>
    {
        CardData.map(
            (data)=>{
                return(
                    <Home name={data.name} colification={data.colification}/>
                )
            }
        )
        
    }
    </>
)

}