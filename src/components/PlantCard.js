import React, {useState} from "react";

function PlantCard({name, image, price}) {
  const [isSoldOut, setIsSoldOut] = useState(true)

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      {isSoldOut ? (
        <button className="primary" onClick={() => setIsSoldOut((isSoldOut) => !isSoldOut)} >In Stock</button>
      ) : (
        <button onClick={() => setIsSoldOut((isSoldOut) => !isSoldOut)}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
