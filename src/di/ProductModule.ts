import type { DockerRepository } from "../domain/DockerRepository.ts";
import { ProdDockerRepository } from "../data/ProdDockerRepository.ts";
import { DevDockerRepository } from "../data/DevDockerRepository.ts";

export interface ProductModule {
  dockerRepository: DockerRepository;
}

const ProdModule: ProductModule = {
  dockerRepository: new ProdDockerRepository(),
};

const DevModule: ProductModule = {
  dockerRepository: new DevDockerRepository(),
};

export const DefaultProductModule: ProductModule = import.meta.env.PROD
  ? ProdModule
  : DevModule;
