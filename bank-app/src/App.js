import "./App.css";
import Table from "./components/Table";
import SearchBar from "./components/SearchBar";
import { React, useEffect ,useState} from "react";
import Form from "./components/Form";

function App() {
  const [transactions, setTransactions] = useState([])

  function filterTransaction(query){
    fetch("http://localhost:3004/transactions")
      .then((req) => req.json())
      .then((data) => {
        const newList = data.filter(transaction => transaction.category.toLowerCase().includes(query.toLowerCase()));
        setTransactions(newList)
      });
  }

function resetTransaction(){
  
    fetch("http://localhost:3004/transactions")
      .then((req) => req.json())
      .then((data) => {
        setTransactions(data)
        // console.log(data);
      });
  };


  
  useEffect(() => {
    fetch("http://localhost:3004/transactions")
      .then((req) => req.json())
      .then((data) => {
        setTransactions(data)
        // console.log(data);
      });
  }, []);

  return (
    <div className="container p-5">
      <header>
        <h1>FlatironBankApp</h1>
      </header>
      
      <SearchBar onSearchQuery={query => filterTransaction(query)} onHandleReset={resetTransaction}/>
      <Form/>
      <Table transactions={transactions}/>
    </div>
  );
}

export default App;
