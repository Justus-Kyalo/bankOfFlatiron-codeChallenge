import { React, useState } from "react";

function Form({ onSubmitForm }) {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if(category ==="" || amount=== "" || description ===""){
        alert("please fill the form")
        return;
    }

    const data = {
      category,
      description,
      amount,
    };

    onSubmitForm(data);
    setAmount("");
    setCategory("");
    setDescription("");
  }

  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Description</label>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="description"
          />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Category</label>
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="enter category"
          />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Amount</label>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="enter amount"
          />
        </div>
        <button
          type="button"
          onClick={handleSubmit}
          className="btn btn-primary"
        >
          submit
        </button>
      </form>
    </div>
  );
}

export default Form;
