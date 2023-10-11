import React, {useState} from "react";

function UpdatePrice({id, price, url}) {
   const [newPrice, setNewPrice] = useState(price)

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(url + id, {
            method:"PATCH",
            headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                price: newPrice
              })
        })
            .then(r => r.json())
    }

    return(
        <div>
            <label>Update Price:</label>
            <label className="price-label" step=".10">$</label>
            <input id="new-price" type="number" name="new-price" placeholder="New Price:" onChange={(e) => setNewPrice(e.target.value)} ></input>
            <button id="update-btn" onClick={handleSubmit}>Update</button>
        </div>
    )
    
}







export default UpdatePrice