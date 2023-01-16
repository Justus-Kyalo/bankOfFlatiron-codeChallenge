import React from "react";

function Form() {
  return (
    <div>
      <form>
        <div class="form-group">
          <label for="formGroupExampleInput">Description</label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            placeholder="description"
          />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">Category</label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="enter category"
          />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">Amount</label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="enter amount"
          />
        </div>
      </form>
    </div>
  );
}

export default Form;
