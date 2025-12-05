
import React, { useState } from 'react';

// MyComponent demonstrates the use of updater functions in state management
function MyComponent() {
  
    const [foods, setFoods] = useState(['Pizza', 'Burger' , 'Pasta']);

    function handleAddFood(){

        const newFood = document.getElementById('foodInput').value;
        document.getElementById('foodInput').value = ''; //Clear input field after adding

        // setFoods([...foods, newFood]); //Spread operator to add new item to array
        setFoods(prevFoods => [...prevFoods, newFood]);

    }


    function handleRemoveFood(index){
        // const foodToRemove = document.getElementById('foodInput').value;

        // setFoods(prevFoods => prevFoods.filter(food => food !== foodToRemove));


        setFoods(foods.filter((_, i) => i !== index)); //filter method to remove item by index. and here it uses updater function and ignores the first parameter with _ . then compares the index to remove the item. without mutating the original array. 

    }

    //map method to render the list of foods 
    // foods.map((food, index) => (
    //     <li key={index}>{food}</li>
    // ))
  return(<div>
            <h2>List of Food</h2>
            <ul>
                {foods.map((food, index) => 
                <li key={index} onClick={() => handleRemoveFood(index)}>
                {food}</li>)}
            </ul>
            <input type="text" id="foodInput" placeholder="Add Food Item" />
            <button onClick={handleAddFood}>Add Food</button>
            {/* <button onClick={handleRemoveFood}>Remove Food</button> */}
  </div>
    
  );

}
export default MyComponent;
