import { useState } from "react";

import { changeHandler } from "../../utils/helpers";
import { addAuthor } from "../../utils/authorFetch";

const AddAuthor = () => {
  const [author, setAuthor] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("submithandler AddAuthor");

    const data = await addAuthor(author);
    console.log("data in addAuthor", data);
  };

  return (
    <div className="wrapper">
      <form onSubmit={submitHandler}>
        <input
          placeholder="Author name"
          onChange={(e) => changeHandler(e, setAuthor)}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default AddAuthor;
