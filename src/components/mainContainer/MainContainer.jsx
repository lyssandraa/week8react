import { useContext } from "react";

import "./MainContainer.css";

import MessageContainer from "../messageContainer/MessageContainer";
import AddAuhtor from "../addAuthor/AddAuthor";
import AdminContainer from "../adminContainer/AdminContainer";
import { AdminProvider } from "../../providers/adminProvider/AdminProvider";

const MainContainer = () => {
  return (
    <div className="wrapper">
      <MessageContainer />
      <AddAuhtor />
      <AdminContainer />
    </div>
  );
};

export default MainContainer;
