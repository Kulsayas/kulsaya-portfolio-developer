import { NextUIProvider } from "@nextui-org/react";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import router from "./router";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <ThemeProvider>
        <Navbar />
        <RouterProvider router={router} />
        <Footer />
      </ThemeProvider>
    </NextUIProvider>
  </React.StrictMode>
);
