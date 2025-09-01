import { ProdProductRepository } from "../data/ProdProductRepository.ts";
import { DevProductRepository } from "../data/DevProductRepository.ts";
import type { ProductRepository } from "../domain/ProductRepository.ts";

export interface ProductModule {
  productRepository: ProductRepository;
}

const ProdModule: ProductModule = {
  productRepository: new ProdProductRepository(),
};

const DevModule: ProductModule = {
  productRepository: new DevProductRepository(),
};

export const DefaultProductModule: ProductModule = import.meta.env.PROD
  ? ProdModule
  : DevModule;
