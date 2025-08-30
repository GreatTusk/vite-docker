import { DockerRepository } from "../domain/DockerRepository.ts";

export class DevDockerRepository implements DockerRepository {
  static instanceCount = 0;
  private readonly ownCount: number;

  constructor() {
    DevDockerRepository.instanceCount++;
    this.ownCount = DevDockerRepository.instanceCount;
    console.log(
      `Creating Docker Dev Repository #${this.ownCount}! I'm being lazily initialized!`,
    );
    console.log("We are in the products route!");
  }

  greet(from: string) {
    console.log(
      `Greeting from Dev Docker Repository #${this.ownCount}, ${from}!`,
    );
  }
}
