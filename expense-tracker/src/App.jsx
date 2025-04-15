import React, { useState } from "react";
import ExpenseForm from "./component/ExpenseForm";
import ExpenseTable from "./component/ExpenseTable";
import SearchBar from "./component/SearchBar";
import './App.css';

function App() {
 
  const [expenses, setExpenses] = useState([]);
  const [search, setSearch] = useState("");
  const [newExpense, setNewExpense] = useState({ name: "", amount: "" });

  
  const handleAddExpense = (e) => {
    e.preventDefault();
    if (newExpense.name && newExpense.amount) {
      const newExpenseItem = {
        id: Date.now(),
        name: newExpense.name,
        amount: parseFloat(newExpense.amount),
      };
      setExpenses([...expenses, newExpenseItem]); 
      setNewExpense({ name: "", amount: "" }); 
    }
  };


  const handleDelete = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  
  const filteredExpenses = expenses.filter((expense) =>
    expense.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <ExpenseForm
        newExpense={newExpense}
        setNewExpense={setNewExpense}
        handleAddExpense={handleAddExpense}
      />
      <SearchBar search={search} setSearch={setSearch} />
      <ExpenseTable expenses={filteredExpenses} handleDelete={handleDelete} />
    </div>
  );
}

export default App;