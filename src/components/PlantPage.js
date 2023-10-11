import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  const url = "http://localhost:6001/plants"
  
  useEffect(() => {
    fetch(url)
      .then((r) => r.json())
      .then(plantData => setPlants(plantData))
      .catch(error => console.error(error))
    }, [])
  
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const addPlant = (plant) => {
    setPlants([...plants, plant])
  }
  
  return (
    <main>
      <NewPlantForm url={url} addPlant={addPlant} />
      <Search  searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <PlantList plants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
