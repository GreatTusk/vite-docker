import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductModule } from "./di/DueDiligenceModuleProvider.tsx";

export function BikeProducts() {
  const { dockerRepository } = useProductModule();
  useEffect(() => {
    dockerRepository.greet("bikes");
  }, [dockerRepository]);
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
