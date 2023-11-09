/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Client from "./pages/Client/client";
import Header from "../components/Nav/Header";
import Product from "./pages/Product/Product";
import './App.css';
import Cotization from "./pages/Cotization/Cotization";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<Home />} />
      <Route path="client" element={<Client />} />
      <Route path="product" element={<Product />} />
      <Route path="cotization" element={<Cotization />} />
    </Route>
  )
);

// eslint-disable-next-line react/prop-types
function App({ routes }) {
  return (
    <div className="root">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
