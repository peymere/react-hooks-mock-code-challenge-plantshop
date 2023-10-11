import React, {useState} from "react";
import UpdatePrice from "./UpdatePrice";

function PlantCard({name, image, price, id, handleDelete, url}) {
  const [isSoldOut, setIsSoldOut] = useState(true)
  const [showEditPrice, setShowEditPrice] = useState(false)

  const handleEditPrice = () => {
    setShowEditPrice(!showEditPrice)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      <div id="button-div">
        {isSoldOut ? (
          <button className="primary" onClick={() => setIsSoldOut((isSoldOut) => !isSoldOut)} >In Stock</button>
        ) : (
          <button onClick={() => setIsSoldOut((isSoldOut) => !isSoldOut)}>Out of Stock</button>
        )} 
        <button id="del-btn" onClick={()=> handleDelete(id)}>Remove</button>
        <button id="edit-price-btn" onClick={handleEditPrice}>Edit Price</button>
        {showEditPrice ? <UpdatePrice price={price} id={id} url={url} /> : ""}
      </div>
    </li>
  );
}

export default PlantCard;
