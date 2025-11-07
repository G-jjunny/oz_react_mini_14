import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import Layout from "./Layout";
import ItemList from "./pages/ItemList";
import Item from "./pages/Item";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="detail" element={<DetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
