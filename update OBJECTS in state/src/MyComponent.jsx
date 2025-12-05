
import React, { useState } from 'react';

// MyComponent demonstrates the use of updater functions in state management
function MyComponent() {
  const [car, setCar] = useState({year: 2010,
                                 make: 'Honda',
                                 model: 'Civic'});
   function handleYearChange(event){

    // setCar({year:2025});

    //Spread oerator look like this = {year:2010, make:'Honda', model:'Civic', year:2025} 2 same duplicate keys not allowed so we use this way.
    // setCar({...car, year:2025}); //Spread operator to copy the existing properties of the car object
    
     setCar(c=> ({...c, year: event.target.value})); //Dynamic value from input field  
   }

   function handleMakeChange(event){
        setCar(c=> ({...c, make: event.target.value}));
    }
    function handleModelChange(event){
        setCar(c=> ({...c, model: event.target.value}));
    }


  return(
    <div>
    <p>Your Favorite Car is : {car.year} {car.make} {car.model}</p>
    <input type="number" value={car.year} onChange={handleYearChange} />
    <input type="text" value={car.make} onChange={handleMakeChange} />
    <input type="text" value={car.model} onChange={handleModelChange} />
    </div>
  );

}
export default MyComponent;
