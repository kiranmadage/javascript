import React from "react";
import { Cards } from "../../../Camponant/Card/id/Idcard";
import carddata from './Block.json'
// import shirt from './shirt2.jpeg'
// import boot from './boot.jpeg'
// import watch from './whatch.jpeg'


export function Mcard() {
   
    return (
        <>
            {
                carddata.map(
                    (data) => {
                        return (
                            <Cards img={data.img} name={data.name} size={data.size} price={data.price} city={data.city} id={data.id}/>
                        );
                    }

                )

            }
        </>
    )
}