import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createRoutesFromElements, createBrowserRouter, Route, RouterProvider } from "react-router";
import { Home, Games, Contact, NotFound } from "./pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/games" element={<Games />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
