import { DockerRepository } from "../domain/DockerRepository.ts";

export class ProdDockerRepository implements DockerRepository {
  static instanceCount = 0;
  private readonly ownCount: number;

  constructor() {
    ProdDockerRepository.instanceCount++;
    this.ownCount = ProdDockerRepository.instanceCount;
    console.log(
      `Creating Docker Prod Repository n${this.ownCount}! I'm being eagerly initialized!`,
    );
    console.log("Are we even in the products route?");
    console.log("If we're in /, this is bad news!");
  }

  greet(from: string) {
    console.log(
      `Greeting from Prod Docker Repository n${this.ownCount}, ${from}!`,
    );
  }
}
