
import React, { useState } from 'react';

// MyComponent demonstrates the use of updater functions in state management
function MyComponent() {

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState('');
    const [carModel, setCarModel] = useState('');

    function handleAddCar(){
        const newCar = {
            year: carYear,
            make: carMake,
            model: carModel
        };

        setCars(prevCars => [...prevCars, newCar]);
        
        setCarYear(new Date().getFullYear());
        setCarMake('');
        setCarModel('');
    }
    function handleRemoveCar(index){
        setCars(prevCars => prevCars.filter((_, i) => i !== index));
    }

    function handleYearChange(event){
        setCarYear(event.target.value);
    }
    function handleMakeChange(event){
        setCarMake(event.target.value);
    }
    function handleModelChange(event){
        setCarModel(event.target.value);
    } 




  return(<div>
             <h2>Car List Objects</h2>
            <ul>
                {cars.map((car, index) => 
                <li key={index} onClick={() => handleRemoveCar(index)}>
                {car.year} {car.make} {car.model}</li>)}
            </ul>
            <input type="number" value={carYear} onChange={handleYearChange} placeholder="Year" /> <br/>
            <input type="text" value={carMake} onChange={handleMakeChange} placeholder="Make" /> <br/>
            <input type="text" value={carModel} onChange={handleModelChange} placeholder="Model" /> <br/>
            <button onClick={handleAddCar}>Add Car</button> 
         </div>
    
  );

}
export default MyComponent;
