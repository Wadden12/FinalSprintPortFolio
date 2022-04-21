import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

export default function Expenses({ expenses }) {
  const [selectedYear, setSelectedDate] = useState("2021");

  const onSelectedDateHandler = (selectedYear) => {
    setSelectedDate(selectedYear);
  };

  const filteredExpenses = expenses.filter((e) => {
    return e.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div className="expenses">
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onSelectedDate={onSelectedDateHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
    </div>
  );
}
