import React from "react";
import Weth from "../assets/weth.png";
import "./CollectionCard.css";

const CollectionCard = ({ id, name, traits, image }) => {
  return (
    <div className="collectionCard">
      <img src={image} alt="" />
      <div className="details">
        <div className="name">
          {name} <div className="id"> #{id}</div>
        </div>
        <div className="priceContainer">
          <img src={Weth} alt="" className="wethImage" />
          <div className="price"> {traits[0]?.value} </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
