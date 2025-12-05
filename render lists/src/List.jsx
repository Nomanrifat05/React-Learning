// function List() {
//     const items = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple'];
//     items.sort();
//     const listItems = items.map(item => <li>{item}</li>);
//     return (<ol>{listItems}</ol>);
// }
// export default List;





/*function List() {
    const items = [{id:1, name:'Apple', calories: 95},
         {id:2, name:'Banana', calories: 105},
         {id:3, name:'Orange', calories: 62},
          {id:4, name:'Mango', calories: 201},
           {id:5, name:'Pineapple', calories: 452}];
// items.sort((a, b) => a.name.localeCompare(b.name)); //ascending order ALPAHABETICAL
// items.sort((a, b) => b.name.localeCompare(a.name)); //descending order ALPAHABETICAL
// items.sort((a, b) => a.calories - b.calories); //ascending order NUMERICAL
// items.sort((a, b) => b.calories - a.calories); //descending order NUMERICAL


// const listItems = items.map(item => <li key={item.id}>
//                                          {item.name}: &nbsp;
//                                          <b>{item.calories}</b></li>); //non-breaking space character (&nbsp;) is used to create a space between elements in HTML without breaking the line. 
// return (<ol>{listItems}</ol>);


const lowCalorieitems = items.filter(item => item.calories < 100);

const listItems = lowCalorieitems.map(lowCalorieitems => <li key={lowCalorieitems.id}>
                                                              {lowCalorieitems.name}: &nbsp;
                                                              <b>{lowCalorieitems.calories}</b></li>); 
    return (<ol>{listItems}</ol>);
}
export default List;
*/










/*
function List(props) {
    const category = props.category;
    const itemList = props.items;

const listItems = itemList.map(item => <li key={item.id}>
                                         {item.name}: &nbsp;
                                         <b>{item.calories}</b></li>); //non-breaking space character (&nbsp;) is used to create a space between elements in HTML without breaking the line. 
return (
         <>
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{listItems}</ol>
         </>
        );

}
// not workable         
List.defaultProps = {
    category: 'category',
    items: []
};

*/



// Correct Modern Way: Use Default Parameters in Function Signature
import PropTypes from "prop-types";
function List({ category = "Category", items = [] }) {
const listItems = items.map(item => <li key={item.id}>
                                         {item.name}: &nbsp;
                                         <b>{item.calories}</b></li>);
/* In the provided code snippet, the `item` variable is
used as a parameter in the `map` function. It
represents each individual element of the `items` array
that is being iterated over. */

  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ol className="list-items">{listItems}</ol>
    </>
  );
}
List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        calories: PropTypes.number
    })),
}

export default List;






