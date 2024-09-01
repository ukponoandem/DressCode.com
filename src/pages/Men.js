

import React from "react";
import "../styles/men.css";
import men1 from "../menasset/menshort1.jpg";
import men2 from "../menasset/menfit1.jpg";
import shoe from "../menasset/menfit2.jpg";
import men3 from "../menasset/menfit6.jpg";
import men4 from "../menasset/shoe1.jpg";
import men5 from "../menasset/menfit9.jpg";
import men6 from "../menasset/menshort2.jpg";
import outfit1 from "../menasset/outfit10.jpg";
import outfit2 from "../menasset/outfit5.jpg";
import outfit3 from "../menasset/cargo1.jpg";
import outfit4 from "../menasset/cargo11.jpg";
import outfit5 from "../menasset/outfit2.jpg";
import outfit6 from "../menasset/hot17.jpg";

function Men() {
  return (
    <div>
      <h1 className="header-text">New line added</h1>
      <h2 className="header-text">DressCode Outfit Unlocked Latest  Arrival..</h2>
      <p className="text p">Shop Fresh Tones</p>
      <div className="content-container">
        <div className="image-gallery">
          <div className="image-wrapper"> 
          <img src={men1} alt="guy with short" />
          <p className="caption">bestseller</p>
        <a href="http://localhost:3000/short"> <button className="btn-23">
  <span className="text"></span>
  <span aria-hidden="" className="marquee">shop Now!</span>
</button></a>
      
          </div>
        </div>
        
        <div className="image-gallery">
          <div className="image-wrapper"> 
          <img src={men2} alt="another guy with shirt" />
          <p className="caption">new arrival</p>
         <a href="http://localhost:3000/tailoring">  <button className="btn-23">
  <span className="text"></span>
  <span aria-hidden="" className="marquee">shop Now!</span>
</button></a>
        </div>
        </div>
        <div className="image-item">
          <img src={shoe} alt="shoe" />
          <p className="caption">Tee</p>
        <a  href="http://localhost:3000/polo-shirt">  <button className="btn-23">
  <span className="text"></span>
  <span aria-hidden="" className="marquee">shop Now!</span>
</button></a>
        </div>
        <div className="image-item">
          <img src={men3} alt="hot fresh" />
          <p className="caption">Hot fresh</p>
        <a href="http://localhost:3000/unisex">  <button className="btn-23">
  <span className="text"></span>
  <span aria-hidden="" className="marquee">shop Now!</span>
</button></a>
          
        </div>
        <div className="image-item">
          <img src={men4} alt="shoe" />
          <p className="caption">Shoe</p>
          <a href="http://localhost:3000/trainers"> <button className="btn-23">
  <span className="text"></span>
  <span aria-hidden="" className="marquee">shop Now!</span>
</button></a>

        </div>
        <div className="image-item">
          <img src={men5} alt="summer outfit" />
          <p className="caption">Summer</p>
          <a href="http://localhost:3000/occasion%20shoe">  <button className="btn-23">
  <span className="text"></span>
  <span aria-hidden="" className="marquee">shop Now!</span>
</button></a>
        </div>
        <div className="image-item">
          <img src={men6} alt="smoothly" />
          <p className="caption">Smoothly</p>
          <a href="http://localhost:3000/Sandals">  <button className="btn-23">
  <span className="text"></span>
  <span aria-hidden="" className="marquee">shop Now!</span>
</button></a>
        </div>
      </div>

      <div className="content-container">
        <h1 className="text">Latest Designers</h1>
        <p className="text">Hottest styles for you</p>
        <div className="image-gallery">
          <div className="image-wrapper">
            <a href="#"><img src={outfit1} alt="Stylish Look 1" className="outfit" /></a>
            <p className="image-caption">Stylish Look 1</p>
            <a href="http://localhost:3000/unisex">  <button className="btn-23">
  <span className="text"></span>
  <span aria-hidden="" className="marquee">shop Now!</span>
</button></a>
          </div>
          <div className="image-wrapper">
            <img src={outfit2} alt="Elegant Design 2" className="outfit" />
            <p className="image-caption">Elegant Design 2</p>
            <a href="http://localhost:3000/Sportwears">  <button className="btn-23">
  <span className="text"></span>
  <span aria-hidden="" className="marquee">shop Now!</span>
</button></a>
          </div>
          <div className="image-wrapper">
            <img src={outfit3} alt="Trendy Outfit 3" className="outfit" />
            <p className="image-caption">Trendy Outfit 3</p>
            <a href="http://localhost:3000/joggers">  <button className="btn-23">
  <span className="text"></span>
  <span aria-hidden="" className="marquee">shop Now!</span>
</button></a>
          </div>
          <div className="image-wrapper">
            <img src={outfit4} alt="Modern Style 4" className="outfit" />
            <p className="image-caption">Modern Style 4</p>
            <a href="http://localhost:3000/Boots">  <button className="btn-23">
  <span className="text"></span>
  <span aria-hidden="" className="marquee">shop Now!</span>
</button></a>
          </div>
        </div>
        <p className="bottom-text">Discover more exclusive designs on our website.</p>
      </div>

      <div className="container">
        <div className="hot">
          <img src={outfit5} alt="Top Man" className="hot-img" />
          <h1>DressCode freshness</h1>
          <p>Super cool</p>
          <a href="http://localhost:3000/Tailoring"><button className="btn-23">
  <span className="text"></span>
  <span aria-hidden="" className="marquee">shop Now!</span>
</button></a>
        </div>
        <div className="hot">
          <img src={outfit6} alt="Hottest" className="hot-img1" />
          <h1>WeekDay</h1>
          <p>seasonal select</p>
          <a href="http://localhost:3000/unisex"><button className="btn-23">
  <span className="text"></span>
  <span aria-hidden="" className="marquee">shop Now!</span>
</button></a>
        </div>
      </div>
    </div>
  );
}

export default Men;