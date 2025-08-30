import {
  createModuleProvider,
  type ModuleConfig,
} from "../../../../shared/ModuleProvider.tsx";
import type { ProductModule } from "./ProductModule.ts";
import { DockerRepository } from "../../../../data/DockerRepository.ts";
import type { ReactNode } from "react";

const { ModuleProvider, useModule } = createModuleProvider<ProductModule>();

const productModuleConfig: ModuleConfig<ProductModule> = {
  mock: () => ({
    dockerRepository: new DockerRepository(),
  }),
  production: () => ({
    dockerRepository: new DockerRepository(),
  }),
};

export interface ProductModuleProviderProps {
  children: ReactNode;
  config?: "mock" | "production";
}

export const ProductModuleProvider = ({
  children,
  config = "production",
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
