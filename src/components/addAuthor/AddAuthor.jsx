import { useContext, useState } from "react";

import { changeHandler } from "../../utils/helpers";
import { addAuthor } from "../../utils/authorFetch";

import { MessageContext } from "../../providers/messageProvider/MessageProvider";

const AddAuthor = () => {
  const [author, setAuthor] = useState("");

  const { updateMessage } = useContext(MessageContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("submithandler AddAuthor");

    const data = await addAuthor(author);
    console.log("data in addAuthor", data);

    const newMessage = `You have added the author ${data.author.authorName}`;

    updateMessage(e, newMessage);
    setAuthor("");
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
