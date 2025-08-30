import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Vite } from "./ui/pages/Vite.tsx";
import { ProductsRoute } from "./ui/pages/products/ProductsNavigationGraph.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Vite />} />
        <Route path="/products/*" element={<ProductsRoute />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
