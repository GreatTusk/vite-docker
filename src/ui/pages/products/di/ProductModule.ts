import { DockerRepository } from "../../../../data/DockerRepository.ts";

export interface ProductModule {
  dockerRepository: DockerRepository;
}

export const DefaultModule: ProductModule = {
  dockerRepository: new DockerRepository(),
};
