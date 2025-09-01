import { useEffect } from "react";
import { Link } from "react-router-dom";
import type { ProductRepository } from "../../../domain/ProductRepository.ts";

interface CarProductsProps {
  productRepository: ProductRepository;
}

export function CarProducts({ productRepository }: CarProductsProps) {
  useEffect(() => {
    productRepository.greet("cars");
  }, [productRepository]);
  return (
    <div>
      <h2>Cars</h2>
      <Link to="/products/bikes">Go to bikes</Link>
      <Link to="/">Go home</Link>
      <ul>
        <li>Audi</li>
        <li>BMW</li>
        <li>Volvo</li>
      </ul>
    </div>
  );
}
