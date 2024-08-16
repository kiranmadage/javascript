import React from "react";
import img from './shirt2.jpeg'
import './Block2.css'
import img4 from './img4.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'


export function New(){
    return(
<>
<img className="img1" src={img}></img>
<h3 className="name">3 Similar Products</h3>
<div className="div">
    <img className="images" src={img4}></img>
    <img className="images" src={img2}></img>
    <img className="images" src={img3}></img>
</div>
<h3 className="name">SHIRT,MEN SHIRT</h3>
<h4 className="name">₹ 500  6% off</h4>
<h4 className="name">Free Delivery</h4>
<hr></hr>

<div className="div">
<h2>Select Size</h2>
<button className="size">S</button>
<button className="size">M</button>
<button className="size">L</button>
<button className="size">Xl</button>
    
</div>
<hr></hr>

</>

    )
}