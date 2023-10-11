import React from "react";
import PlantCard from "./PlantCard";

function PlantList({setPlants, plants, url}) {
  const handleDelete = (id) => {
    fetch(url + id, {
      method: "DELETE"
    })
      .then(r => r.json())
      .then(() => {console.log("deleted plant", id);
      setPlants(plants.filter(plant => plant.id !== id))})
  }
  
  return (
    <ul className="cards">
      {plants.map(plant => {
        return(
          <PlantCard handleDelete={handleDelete} key={plant.id} id={plant.id} name={plant.name} image={plant.image} price={plant.price} url={url}/>
        )
      })}
    </ul>
  );
}

export default PlantList;
