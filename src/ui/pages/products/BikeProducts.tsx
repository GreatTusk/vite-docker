import { useEffect } from "react";
import { Link } from "react-router-dom";
import type { DockerRepository } from "../../../domain/DockerRepository.ts";

interface BikeProductsProps {
  dockerRepository: DockerRepository;
}

export function BikeProducts({ dockerRepository }: BikeProductsProps) {
  useEffect(() => {
    dockerRepository.greet();
  }, [dockerRepository]);
  return (
    <div>
      <h2>Bikes</h2>
      <Link to="/products">Go to products</Link>
      <Link to="/">Go home</Link>
      <ul>
        <li>Yamaha</li>
        <li>Suzuki</li>
        <li>Honda</li>
      </ul>
    </div>
  );
}
