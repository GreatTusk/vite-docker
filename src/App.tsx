import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Vite } from "./ui/pages/Vite.tsx";
import { CarProducts } from "./ui/pages/products/CarProducts.tsx";
import { BikeProducts } from "./ui/pages/products/BikeProducts.tsx";
import {
  DefaultProductModule,
  type ProductModule,
} from "./di/ProductModule.ts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Vite />} />
        {ProductsRoute(DefaultProductModule)}
      </Routes>
    </BrowserRouter>
  );
}

function ProductsRoute({ productRepository }: ProductModule) {
  return (
    <>
      <Route
        path="/products/cars"
        element={<CarProducts productRepository={productRepository} />}
      />
      <Route
        path="/products/bikes"
        element={<BikeProducts productRepository={productRepository} />}
      />
    </>
  );
}

export default App;
