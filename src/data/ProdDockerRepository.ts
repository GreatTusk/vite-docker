import { DockerRepository } from "../domain/DockerRepository.ts";

export class ProdDockerRepository implements DockerRepository {
  static instanceCount = 0;
  private readonly ownCount: number;

  constructor() {
    ProdDockerRepository.instanceCount++;
    this.ownCount = ProdDockerRepository.instanceCount;
    console.log(
      "Creating Docker Prod Repository! I'm being eagerly initialized!",
    );
    console.log("Are we even in the products route?");
    console.log("If we're in /, this is bad news!");
  }

  greet() {
    console.log(`Greeting from Docker Repository n${this.ownCount}!`);
  }
}
