import { useEffect } from "react";
import { Link } from "react-router-dom";
import type { ProductRepository } from "../../../domain/ProductRepository.ts";

interface BikeProductsProps {
  productRepository: ProductRepository;
}

export function BikeProducts({ productRepository }: BikeProductsProps) {
  useEffect(() => {
    productRepository.greet("bikes");
  }, [productRepository]);
  return (
    <div>
      <h2>Bikes</h2>
      <Link to="/products/cars">Go to cars</Link>
      <Link to="/">Go home</Link>
      <ul>
        <li>Yamaha</li>
        <li>Suzuki</li>
        <li>Honda</li>
      </ul>
    </div>
  );
}
