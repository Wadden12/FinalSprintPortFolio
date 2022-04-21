import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

import React, { useState } from "react";

const Dummy_EXPENSES = [
  {
    id: "e1",
    title: "Winter Tires",
    amount: 220.25,
    date: new Date(2020, 11, 1),
  },
  {
    id: "e2",
    title: "New Mac Book Pro",
    amount: 1650.5,
    date: new Date(2021, 5, 20),
  },
  {
    id: "e3",
    title: "Razor Black Widow Keyboard",
    amount: 294.67,
    date: new Date(2022, 5, 10),
  },
  {
    id: "e4",
    title: "New Desk (Gaming)",
    amount: 850,
    date: new Date(2021, 1, 7),
  },
];

function Expense() {
  const [expenses, SetExpenses] = useState(Dummy_EXPENSES);

  const addExpenseHandler = (expense) => {
    //updating the list by adding to the old one
    SetExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default Expense;
