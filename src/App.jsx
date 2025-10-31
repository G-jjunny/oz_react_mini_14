import HomePage from "./pages/HomePage";
import "./App.css";
import DetailPage from "./pages/DetailPage";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/details" element={<DetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
