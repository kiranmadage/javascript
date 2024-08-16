import React, { useState } from "react";
import './interview.css'


export function Box() {
    const [name, setName] = useState('')

    function Name() {
        setName(prompt("Enter your name"))


    }

    const [no, setNo] = useState('')

    function No() {
        setNo(prompt('Enter no'))

    }

    const [add, setAdd] = useState('')

    function Add() {
        setAdd(prompt('Enter your Address'))

    }

    const [mobile, setMobile] = useState('')

    function Mobile() {
        setMobile(prompt('Enter your Mobile no'))

    }


    return (
        <>
            <div className="int">

                <h2>Name:{name}</h2>
                <h2>No:{no}</h2>
                <h2> Address:{add}</h2>
                <h2> MobileNo{mobile}</h2>


                <button onClick={Name}>name</button>
                <button onClick={No}>no</button>
                <button onClick={Add}>address</button>
                <button onClick={Mobile}>mobileNo</button>
                {/* <button onClick={allData}>Save</button> */}
            </div>
        </>
    )
}