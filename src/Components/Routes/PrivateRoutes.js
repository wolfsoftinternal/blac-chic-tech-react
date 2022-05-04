import React from "react";
import { Route, Routes } from "react-router-dom";

import Footer from "../Common/Layouts/Footer";
import Header from "../Common/Layouts/Header";

import Home from "../Private/Home";
import Profile from "../Private/Profiles/Profile";
import Settings from "../Private/Settings/Settings";

function PrivateRoutes() {
  return (
    <>
      <Header />
      <div className="main-page">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default PrivateRoutes;
