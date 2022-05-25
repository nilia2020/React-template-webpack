import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../containers/Layout";
import Login from "../containers/Login";
import RecoveryPassword from "../containers/RecoveryPassword";
import "../styles/global.css";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="recovery-password" element={<RecoveryPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default App;
