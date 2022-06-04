import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "@containers/Layout";
import "/main.css";
import NotFound from "@pages/NotFound";
import AppContext from "@context/AppContext";
import useInitialState from "@hooks/useInitialState";
import Home from "@pages/Home";

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </AppContext.Provider>
  );
};

export default App;
