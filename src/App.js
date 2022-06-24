import Expenses from "./components/expenses.js";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      realDate: new Date(2022, 7, 12),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2022, 2, 13) },
    { id: "e3", title: "New wheel", amount: 99.49, date: new Date(2022, 5, 9) },
    {
      id: "e4",
      title: "New Robot Cleaner",
      amount: 199.49,
      date: new Date(2022, 3, 24),
    },
  ];
  return (
    <div>
      <Expenses depense={expenses} />
    </div>
  );
}

export default App;
