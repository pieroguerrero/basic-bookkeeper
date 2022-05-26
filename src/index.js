import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route
          path="/"
          element={
            <>
              Hellow!!!!!\n Hellow!!!!!\nHellow!!!!!\nHellow!!!!!\nHellow!!!!!\n
              Hellow!!!!!\nHellow!!!!!\nHellow!!!!!\nHellow!!!!!\n
              Hellow!!!!!\nHellow!!!!!\nHellow!!!!!\nHellow!!!!!\n
              Hellow!!!!!\nHellow!!!!!\nHellow!!!!!\nHellow!!!!!\n
              Hellow!!!!!\nHellow!!!!!\nHellow!!!!!\nHellow!!!!!\n
              Hellow!!!!!\nHellow!!!!!\nHellow!!!!!\nHellow!!!!!\n
              Hellow!!!!!\nHellow!!!!!\nHellow!!!!!\nHellow!!!!!\n
              Hellow!!!!!\nHellow!!!!!\nHellow!!!!!\nHellow!!!!!\n
              Hellow!!!!!\nHellow!!!!!\nHellow!!!!!\n{" "}
            </>
          }
        />
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
