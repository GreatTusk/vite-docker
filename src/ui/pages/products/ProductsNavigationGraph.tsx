import { ProductModuleProvider } from "../../../di/DueDiligenceModuleProvider.tsx";
import { Route, Routes } from "react-router-dom";
import { CarProducts } from "./CarProducts.tsx";
import { BikeProducts } from "./BikeProducts.tsx";

export function ProductsRoute() {
  return (
    <ProductModuleProvider>
      <Routes>
        <Route path="cars" element={<CarProducts />} />
        <Route path="bikes" element={<BikeProducts />} />
      </Routes>
    </ProductModuleProvider>
  );
}
