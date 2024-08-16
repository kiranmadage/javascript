import React from "react";
import carddata from '../Block/Block.json'
import { useParams } from 'react-router-dom';


export function Info() {
    const { id } = useParams()

    return (
        <>
            {

                carddata.map(
                    (data) => {
                        if (data.id == id)
                            return (
                                <>
                                    <h4>{data.price}</h4>
                                    <h4>{data.city}</h4>

                                </>


                            )
                    }
                )
            }
        </>
    )

}