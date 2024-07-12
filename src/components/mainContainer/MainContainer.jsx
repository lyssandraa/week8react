import React from "react";

import "./MainContainer.css";

import MessageContainer from "../messageContainer/MessageContainer";
import AddAuhtor from "../addAuthor/AddAuthor";

const MainContainer = () => {
  return (
    <div className="wrapper">
      <MessageContainer />
      <AddAuhtor />
    </div>
  );
};

export default MainContainer;
