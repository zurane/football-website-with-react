import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Ensure you use react-router-dom
import Players from "./pages/Players";
import Layout from "./components/Layout";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="players" element={<Players />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
export default App;
