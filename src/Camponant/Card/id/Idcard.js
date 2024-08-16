import React from "react";
import './Idcard.css'
import { Link } from 'react-router-dom'



export function Cards({ img, name, price, id }) {

    return (
        <>
            <Link to={`/Info/${id}`}>
                <div className={`maincard bg-${name}`}>

                    <img className="img" src={img}></img>

                    <h1 className="text">{name}</h1>

                    <h2 className="text">{price}</h2>


                </div>

            </Link>
        </>
    )
}