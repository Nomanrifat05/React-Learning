import List from "./List";
function App() {
  const fruits = [
    { id: 1, name: "Apple", calories: "apple" },
    { id: 2, name: "Banana", calories: 105 },
    { id: 3, name: "Orange", calories: 62 },
    { id: 4, name: "Mango", calories: 201 },
    { id: 5, name: "Pineapple", calories: 452 },
  ];

  const vegetables = [
    { id: 1, name: "Carrot", calories: 41 },
    { id: 2, name: "Broccoli", calories: 55 },
    { id: 3, name: "Spinach", calories: 23 },
    { id: 4, name: "Potato", calories: 77 },
    { id: 5, name: "Tomato", calories: 18 },
  ];
  return (
    <>
      {/* <List items={fruits} category="Fruits" />
    <List items={vegetables} category="Vegetables" /> */}
      {/* 
    {fruits.length > 0 ? <List items={fruits} category="Fruits" /> : null}
    {vegetables.length > 0 ? <List items={vegetables} category="Vegetables" /> :null} 
*/}

      {/* {fruits.length > 0 && <List category="Fruits" />} */}
      {fruits.length > 0 && <List items={fruits} category="Fruits" />}
      {vegetables.length > 0 && (
        <List items={vegetables} category="Vegetables" />
      )}
    </>
  );
}

export default App;
