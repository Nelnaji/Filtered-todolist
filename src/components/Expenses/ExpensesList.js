import ExpenseItem from "./ExpenseItem.js";
import "./ExpensesList.css";

const ExpensesList = ({ dataForExpensesList }) => {
  if (dataForExpensesList.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {dataForExpensesList.map((individualDepense) => {
        return (
          <ExpenseItem
            key={individualDepense.id}
            depenseItem={individualDepense}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
