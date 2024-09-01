
import React, { useState } from "react";
import Productitem from "../pages/prodouctitem";
import "../styles/boot.css";

const Occasion = () => {
  const [detail, setDetail] = useState(null);
  const [message, setMessage] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);

  // Filter products for bags category
  const bootsProducts = Productitem.filter(item => item.category === "occasion");

  const detailspage = (item) => {
    setDetail(item);
  };

  const handleAddToCart = () => {
    // Show alert and then update state
    alert("Successfully added to cart!");
    setMessage("1 item added");
    setButtonClicked(true); // Update state to hide the button
  };
  const handleCloseDetails = () => {
    setDetail(null); // Hide details
    setButtonClicked(true); // Reset button state
    setMessage(""); // Clear message
  };
  return (
    <div>
   <h1 className="header-text">New line added</h1>
      <h2 className="header-text">DressCode Outfit Unlocked Latest  Arrival..</h2>
      <p className="text p">Shop Fresh Tones</p>

      {detail ? (
        <div className="detail-containers">
          <div className="detail-content">
            <div className="detail-info">
              <div className="img-box">
              <button className="close-button" onClick={handleCloseDetails}>X</button>
                <img src={detail.img} alt={detail.des} />
              </div>
              <div className="info">
                <h3>{detail.price}</h3>
                <p>{detail.Title}</p>
                <button className="btn-23">
  <span className="text" ></span>
  <span aria-hidden="" className="marquee" onClick={() => alert("Order placed successfully!")}>Placed Order!</span>
</button>
                <h1>Call us For Bulk Purchases</h1>
                 <p className="cart-message">09161248397</p> 
                {!buttonClicked && (
                  <button onClick={handleAddToCart} className="cart-button">ADD TO CART</button>
                )}
                <p className="cart-message">{message}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
                    <div className="fixed-links-container">
  <a href="http://localhost:3000/Men" className="display3">Shop Men</a> 
  <a href="http://localhost:3000/Women" className="display4">Shop Women</a>
</div>
        <div className="container">
          {bootsProducts.map((item) => (
            <div key={item.id} className="box" onClick={() => detailspage(item)}>
              <div className="contant">
                <div className="img-box">
                  <img src={item.img} alt={item.Title} />
                </div>
                <div className="details">
                  <div className="info">
                    <p>{item.des}</p>
                    <h3>{item.price}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        </>
      )}
    </div>
  );
};

export default Occasion;