import React from "react";

function Table({ transactions }) {
  return (
    <div className="pt-5">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">description</th>
            <th scope="col">category</th>
            <th scope="col">amount</th>
            <th scope="col">date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id} >
              <th scope="row">{transaction.id}</th>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
              <td>{new Date(transaction.date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
