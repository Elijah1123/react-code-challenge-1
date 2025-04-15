import React from "react";

const ExpenseTable = ({ expenses, handleDelete }) => {
  return (
    <table className="w-full table-auto border">
      <thead>
        <tr className="bg-gray-100">
          <th className="p-2 border">Name</th>
          <th className="p-2 border">Amount ($)</th>
          <th className="p-2 border">Actions</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id} className="text-center">
            <td className="p-2 border">{expense.name}</td>
            <td className="p-2 border">{expense.amount.toFixed(2)}</td>
            <td className="p-2 border">
              <button
                onClick={() => handleDelete(expense.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseTable;