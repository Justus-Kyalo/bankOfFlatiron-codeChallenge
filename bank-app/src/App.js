import "./App.css";
import Table from "./components/Table";
import SearchBar from "./components/SearchBar";
import { React, useEffect, useState } from "react";
import Form from "./components/Form";

function App() {
  const [transactions, setTransactions] = useState([]);
//filter 
  function filterTransaction(query) {
    fetch(
      "https://remmykyalo.github.io/transactions.json"
    )
      .then((req) => req.json())
      .then((data) => {
        const newList = data.transactions.filter((transaction) =>
          transaction.category.toLowerCase().includes(query.toLowerCase())
        );
        setTransactions(newList);
      });
  }

  function pushData(data) {
    console.log(data);
    const largestId = transactions.sort((a, b) => b.id - a.id)[0].id;
    const newTransaction = {
      ...data,
      id: largestId + 1,
      date: new Date(),
    };
    const newList = [newTransaction, ...transactions];
    setTransactions(newList.transactions);
  }

  function resetTransaction() {
    fetch(
      "https://remmykyalo.github.io/transactions.json"
    )
      .then((req) => req.json())
      .then((data) => {
        setTransactions(data.transactions);
        // console.log(data);
      });
  }

  useEffect(() => {
    fetch(
      "https://remmykyalo.github.io/transactions.json"
    )
      .then((req) => req.json())
      .then((data) => {
        setTransactions(data.transactions);
        // console.log(data);
      });
  }, []);

  return (
    <div className="container p-5 app">
      <header>
        <h1>FlatironBankApp</h1>
      </header>

      <SearchBar
        onSearchQuery={(query) => filterTransaction(query)}
        onHandleReset={resetTransaction}
      />
      <Form onSubmitForm={pushData} />
      <Table transactions={transactions} />
    </div>
  );
}

export default App;
