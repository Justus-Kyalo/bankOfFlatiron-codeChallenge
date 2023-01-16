import "./App.css";
import Table from "./components/Table";
import SearchBar from "./components/SearchBar";
import { React, useEffect ,useState} from "react";

function App() {
  const [transactions, setTransactions] =useState([])
  
  useEffect(() => {
    fetch("http://localhost:3004/transactions")
      .then((req) => req.json())
      .then((data) => {
        setTransactions(data)
        console.log(data);
      });
  }, []);

  return (
    <div className="container p-5">
      <header>
        <h1>FlatironBankApp</h1>
      </header>
      <SearchBar />
      <Table transactions={transactions}/>
    </div>
  );
}

export default App;
