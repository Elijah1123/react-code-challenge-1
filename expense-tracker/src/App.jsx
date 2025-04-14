import React from "react";
import ExpenseForm from "./component/ExpenseForm";
import ExpenseTable from "./component/ExpenseTable";
import SearchBar from "./component/SearchBar";
import './App.css';
function App() {
  return (
    <div className="App">
      <ExpenseForm />
      <SearchBar />
      <ExpenseTable />
    </div>
  );
}

export default App;
