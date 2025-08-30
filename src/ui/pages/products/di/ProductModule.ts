import type { DockerRepository } from "../../../../domain/DockerRepository.ts";

export interface ProductModule {
  dockerRepository: DockerRepository;
}
