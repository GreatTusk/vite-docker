import type { DockerRepository } from "../../../data/DockerRepository.ts";
import { useEffect } from "react";
import { Link } from "react-router-dom";

interface CarProductsProps {
  dockerRepository: DockerRepository;
}

export function CarProducts({ dockerRepository }: CarProductsProps) {
  useEffect(() => {
    dockerRepository.greet();
  }, [dockerRepository]);
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
