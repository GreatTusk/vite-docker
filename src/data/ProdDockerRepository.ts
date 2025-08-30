import { DockerRepository } from "../domain/DockerRepository.ts";

export class ProdDockerRepository implements DockerRepository {
  static instanceCount = 0;
  private readonly ownCount: number;

  constructor() {
    ProdDockerRepository.instanceCount++;
    this.ownCount = ProdDockerRepository.instanceCount;
    console.log(
      `Creating Docker Prod Repository #${this.ownCount}! I'm being lazily initialized!`,
    );
    console.log("We are in the products route!");
  }

  greet(from: string) {
    console.log(
      `Greeting from Prod Docker Repository #${this.ownCount}, ${from}!`,
    );
  }
}
