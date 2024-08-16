
import React from 'react'
import './Mall.css'
import img1 from './1st.jpg'

import img3 from './3rd.jpg'
import img4 from './4th.jpg'
import img5 from './5th.jpg'

import fruit from './fruits.jpg'
import vegetable from './vegetable.jpg'
import mango from './mango.jpg'
import shimla from './shimla.jpg'
import coconut from './coconut.jpg'




export function Dmart() {

    return (
        <>
            <div className='D-main'>
                <div >
                    <img className='D-img' src={img1}></img>
                </div>

            </div>


            <div className='D-main'>
                <img className='D-img' src={img3}></img>
            </div>


            <div className='F-main'>
                <h1 className='D-text'> Fruits & Vedetable </h1>

                <div className="fruit">
                    <div className="fruit1">
                        <img className="F-img" src={fruit}></img>
                        <h3 className="F-text">Fresh Fruits</h3>
                    </div>

                    <div className="fruit1">
                        <img className="F-img" src={vegetable}></img>
                        <h3 className="F-text">Fresh Vegetable</h3>
                    </div>
                </div>

               <div className="fruit">
               <div className="fruit1">
                    <img src={mango}></img>
                    <h3 className="F-text">Seasonal</h3>
                </div>
                <div className="fruit1">
                    <img src={shimla}></img>
                    <h3 className="F-text">Cuts & Exotics</h3>
                </div>
                <div className="fruit1">
                    <img src={coconut}></img>
                    <h3 className="F-text">Evergrfgbday Seasoning</h3>
                </div>
               </div>
            </div>













            <div className='D-main'>
                <img className='D-img' src={img4}></img>
            </div>


            <div className='D-main'>
                <img className='D-img' src={img5}></img>
            </div>
        </>
    )
}



