import {
  createModuleProvider,
  type ModuleConfig,
} from "../shared/ModuleProvider.tsx";
import type { ProductModule } from "./ProductModule.ts";
import type { ReactNode } from "react";
import { DevProductRepository } from "../data/DevProductRepository.ts";
import { ProdProductRepository } from "../data/ProdProductRepository.ts";
import { IS_PROD } from "../shared/Enviroment.ts";

const { ModuleProvider, useModule } = createModuleProvider<ProductModule>();

const productModuleConfig: ModuleConfig<ProductModule> = {
  mock: () => ({
    dockerRepository: new DevProductRepository(),
  }),
  production: () => ({
    dockerRepository: new ProdProductRepository(),
  }),
};

export interface ProductModuleProviderProps {
  children: ReactNode;
  config?: "mock" | "production";
}

export const ProductModuleProvider = ({
  children,
  config = IS_PROD ? "production" : "mock",
}: ProductModuleProviderProps) => (
  <ModuleProvider
    config={config}
    moduleConfig={productModuleConfig}
    displayName="Product"
  >
    {children}
  </ModuleProvider>
);

export const useProductModule = useModule;
