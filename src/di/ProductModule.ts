import type { ProductRepository } from "../domain/ProductRepository.ts";

export interface ProductModule {
  dockerRepository: ProductRepository;
}
