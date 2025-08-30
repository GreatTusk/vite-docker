import { createContext, type ReactNode, useContext, useMemo } from "react";

export interface ModuleConfig<T> {
  mock: () => T;
  production: () => T;
}

export interface ModuleProviderProps<T> {
  children: ReactNode;
  config?: "mock" | "production" | T;
  moduleConfig: ModuleConfig<T>;
  displayName: string;
}

export function createModuleProvider<T>() {
  const ModuleContext = createContext<T | null>(null);

  const ModuleProvider = ({
    children,
    config = "production",
    moduleConfig,
    displayName,
  }: ModuleProviderProps<T>) => {
    const services = useMemo(() => {
      console.log(`Instantiating ${displayName} module services`);

      if (typeof config === "object") {
        return config;
      }

      switch (config) {
        case "mock":
          return moduleConfig.mock();
        case "production":
        default:
          return moduleConfig.production();
      }
    }, [config, moduleConfig]);

    return (
      <ModuleContext.Provider value={services}>
        {children}
      </ModuleContext.Provider>
    );
  };

  const useModule = (): T => {
    const context = useContext(ModuleContext);
    if (!context) {
      throw new Error(`useModule must be used within a ModuleProvider`);
    }
    return context;
  };

  return { ModuleProvider, useModule };
}
