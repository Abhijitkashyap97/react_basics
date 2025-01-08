function List() {
  // An array of objects
  const arrObj = [
    { id: 1, name: "Apple", calories: 45 },
    { id: 2, name: "Orange", calories: 43 },
    { id: 3, name: "Melons", calories: 49 },
    { id: 4, name: "Banana", calories: 12 },
    { id: 5, name: "Coconut", calories: 32 },
  ];
const veg=[{id:1, name: "Carrot", calories: 10 },
          {id: 2, name: "Spinach", calories: 20 },
          {id: 3, name: "Raddish", calories: 30 },
          {id: 4, name: "Beetroot", calories: 9 },
          {id: 5, name: "Cabbage", calories: 19 }]
  const list2 = arrObj.map((e) => (
    <li key={e.id}>
      {e.name}: <b>{e.calories}</b>
    </li>
));
const list1=veg.map((e)=>
  <ul>
    <li key={e.id}>{e.name}: <b>{e.calories}</b></li>
  </ul>
)
  return <><ul className="fruit-list">{list2}</ul><ol className="fruit-list">{list1}</ol></>;}

export default List;
