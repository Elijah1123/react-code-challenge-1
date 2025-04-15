import React from 'react';

function ExpenseTable({ expenses }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((exp, index) => (
          <tr key={index}>
            <td>{exp.name}</td>
            <td>{exp.description}</td>
            <td>{exp.amount}</td>
            <td>{exp.category}</td>
            <td><button>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ExpenseTable;
