import React, {useState} from "react";

function NewPlantForm({url, addPlant}) {
  const [newPlantName, setNewName] = useState("")
  const [newPlantImage, setNewImage] = useState("")
  const [newPlantPrice, setNewPrice] = useState(0)

  const newPlantData = {
    name : newPlantName, 
    image : newPlantImage, 
    price : newPlantPrice
  }
  const handlePlantSubmit = (e) => {
    e.preventDefault() 
    fetch(url, {
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPlantData)
    })
      .then((response) => response.json())
      .then((newPlant) => addPlant(newPlant))
    e.target.reset()
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handlePlantSubmit}>
        <input type="text" name="name" placeholder="Plant name" onChange={(e) => setNewName(e.target.value)} required/>
        <input type="text" name="image" placeholder="Image URL" onChange={(e) => setNewImage(e.target.value)} required />
        <input type="number" name="price" step=".10" placeholder="Price" onChange={(e) => setNewPrice(e.target.value)} required />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
