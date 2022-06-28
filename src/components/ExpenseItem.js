import "./ExpenseItem.css";
import OutputExpenseDate from "./ExpenseDate";
import Card from "./Card";

function ExpenseItem({ depenseItem }) {
  return (
    <Card className="expense-item">
      <OutputExpenseDate depenseDate={depenseItem} />
      <div className="expense-item__card">
        <h2 className="expense-item__description">{depenseItem.title}</h2>
        <span className="expense-item__price">{depenseItem.amount}€</span>
      </div>
    </Card>
  );
}

export default ExpenseItem;
