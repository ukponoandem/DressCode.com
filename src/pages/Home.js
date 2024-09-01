import React from "react";
import "../styles/Home.css"
import pic1 from "../assets/carva2.jpg"
<link href="https://fonts.googleapis.com/css?family=Ubuntu+Mono:400,700" rel="stylesheet"></link>

// import pic2 from "../assets/pic2.jpg"
// import pic5 from "../assets/pic5.jpg"
function Home(){
    return(
        <div className="header">
            <h1 className="cssanimation leMagnify sequence">Welcome to DressCode</h1>
            <p className="cssanimation leMagnify sequence">Your Favourite Dress Site</p>
            
        <img src={pic1} alt="girl on the beach" className="images"></img>
        {/* <img src={pic2} alt="girl on the beach" className="images2"></img>
        <img src={pic5} alt="girl on the beach" className="images3"></img> */}
        <a href="http://localhost:3000/Men" className="display">Shop Men</a> 
        <a href="http://localhost:3000/Women" className="display1">Shop Women</a> 
    
        </div>
    )
}
export default Home
