import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Vite } from "./ui/pages/Vite.tsx";
import { CarProducts } from "./ui/pages/products/CarProducts.tsx";
import { BikeProducts } from "./ui/pages/products/BikeProducts.tsx";
import { ProductModuleProvider } from "./ui/pages/products/di/DueDiligenceModuleProvider.tsx";

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

function ProductsRoute() {
  return (
    <ProductModuleProvider>
      <Routes>
        <Route path="cars" element={<CarProducts />} />
        <Route path="bikes" element={<BikeProducts />} />
      </Routes>
    </ProductModuleProvider>
  );
}

export default App;
