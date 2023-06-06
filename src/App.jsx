import React from "react";
import { Route, Routes } from "react-router-dom";
import Screen1 from "./Screens/Screen1";
import Screen2 from "./Screens/Screen2";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Routes
        style={{
          margin: "100px",
        }}
      >
        <Route path="/" element={<Screen1 />} />
        <Route path="/thank-you" element={<Screen2 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
