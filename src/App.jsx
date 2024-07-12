import { useState } from "react";
import "./App.css";

import Layout from "./components/layout/Layout";
import MainContainer from "./components/mainContainer/MainContainer";

const App = () => {
  return (
    <>
      <Layout>
        <MainContainer />
      </Layout>
    </>
  );
};

export default App;
