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

function ProductsRoute({ dockerRepository }: ProductModule) {
  return (
    <>
      <Route
        path="/products"
        element={<CarProducts dockerRepository={dockerRepository} />}
      />
      <Route
        path="/products/bikes"
        element={<BikeProducts dockerRepository={dockerRepository} />}
      />
    </>
  );
}

export default App;
