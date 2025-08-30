import {
  createModuleProvider,
  type ModuleConfig,
} from "../../../../shared/ModuleProvider.tsx";
import type { ProductModule } from "./ProductModule.ts";
import type { ReactNode } from "react";
import { DevDockerRepository } from "../../../../data/DevDockerRepository.ts";
import { ProdDockerRepository } from "../../../../data/ProdDockerRepository.ts";
import { IS_PROD } from "../../../../shared/Enviroment.ts";

const { ModuleProvider, useModule } = createModuleProvider<ProductModule>();

const productModuleConfig: ModuleConfig<ProductModule> = {
  mock: () => ({
    dockerRepository: new DevDockerRepository(),
  }),
  production: () => ({
    dockerRepository: new ProdDockerRepository(),
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
