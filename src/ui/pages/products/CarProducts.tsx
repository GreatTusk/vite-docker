import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductModule } from "./di/DueDiligenceModuleProvider.tsx";

export function CarProducts() {
  const { dockerRepository } = useProductModule();

  useEffect(() => {
    dockerRepository.greet("cars");
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
