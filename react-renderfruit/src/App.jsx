import List from "./List.jsx"

function App() {

  const fruits = [{ ID: 1, name: "Apple", calories: 95 },
  { ID: 2, name: "Orange", calories: 45 },
  { ID: 3, name: "Banana", calories: 105 },
  { ID: 4, name: "Coconut", calories: 1400 },
  { ID: 5, name: "Pineapple", calories: 452 }];

  const vegetables = [{ ID: 6, name: "Potatoes", calories: 110 },
  { ID: 7, name: "Celery", calories: 16 },
  { ID: 8, name: "Carrots", calories: 25 },
  { ID: 9, name: "Corn", calories: 63 },
  { ID: 10, name: "Broccoli", calories: 50 }];

  return (<>
    <h1>Meal Calories (React JS)</h1>
    {fruits.length > 0 ? <List items={fruits} category="Fruits" /> : null}
    {vegetables.length > 0 ? <List items={vegetables} category="Vegetables" /> : null}
  </>);
}

export default App