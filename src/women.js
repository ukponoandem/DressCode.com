import React from "react";
import women1 from "./womenstyle/cavs.jpg"
import women2 from "./womenasset/women4.jpg"
import women3 from "./womenasset/women5.jpg"
import women5 from "./womenasset/women8.jpg"
import women4 from "./womenasset/women7.jpg"
import women6 from "./womenasset/women10.jpg"
import women7 from "./womenasset/women12.jpg"
import "./styles/women.css"
function Women(){
    return(
        <div>
        <div className="header">
        <div className="sub-header">
<img src={women1} alt="Two Fashion women " className="img1"></img>
<h1 className="caption1">Shop It For Girls</h1>
<a href="http://localhost:3000/unisexs"><button className="btn-23">
  <span className="text"></span>
  <span aria-hidden="" className="marquee">shop Now!</span>
</button></a>
        </div>
        <div className="main-content">
            <div className="sub-content">
        <img src={women2} alt="fashion women" className="fashion"></img>
        <p className="image-text">Hello world</p>
        <p className="image-text">hrekm</p>
      <a href="http://localhost:3000/shorts">  <button className="btn-23">
  <span className="text"></span>
  <span aria-hidden="" className="marquee">Shop Now!</span>
</button></a>
        </div>
        <div className="sub-content">
        <img src={women3} alt="fashion women" className="fashion"></img>
        <p className="image-text"> hello people</p>
        <p className="image-text">hrekm</p>
      <a href="http://localhost:3000/Skirts">  <button className="btn-23">
  <span className="text"></span>
  <span aria-hidden="" className="marquee">shop Now!</span>
</button></a>
        </div>
        <div className="sub-content">
        <img src={women4} alt="fashion women" className="fashion"></img>
        <p className="image-text">hello everyone</p>
       <a href="http://localhost:3000/Bags"> <button className="btn-23">
  <span className="text"></span>
  <span aria-hidden="" className="marquee">shop Now!</span>
</button></a>
        </div>
        <div className="sub-content">
        <img src={women5} alt="fashion women" className="fashion"></img>
        <p className="image-text"> hello hi</p>
      <a href="http://localhost:3000/Heels">  <button className="btn-23">
  <span className="text"></span>
  <span aria-hidden="" className="marquee">shop Now!</span>
</button></a>
        </div>
       
        </div>
        </div>

<div className="content">
    <div className="image-wrap">
    <img src={women6} alt="fashion women" className="fashion1"></img>
    <p className="content-text">edidem</p>
  
   <a href="http://localhost:3000/top"> <button className="btn-23">
  <span className="text"></span>
  <span aria-hidden="" className="marquee">shop Now!</span>
</button></a>

    </div>

    <div className="image-wrap">
    <img src={women7} alt="fashion women" className="fashion1"></img> 
    <p className="content-text">abadie</p> 
  <a href="http://localhost:3000/blazer">  <button className="btn-23">
  <span className="text"></span>
  <span aria-hidden="" className="marquee">shop Now!</span>
</button></a>
    </div>
</div>

        </div>
    )
}

export default Women