import { DockerRepository } from "../domain/DockerRepository.ts";

export class DevDockerRepository implements DockerRepository {
  static instanceCount = 0;
  private readonly ownCount: number;

  constructor() {
    DevDockerRepository.instanceCount++;
    this.ownCount = DevDockerRepository.instanceCount;
    console.log(
      "Creating Docker Dev Repository! I'm being eagerly initialized!",
    );
    console.log("Are we even in the products route?");
    console.log("If we're in /, this is bad news!");
  }

  greet() {
    console.log(`Greeting from Docker Repository n${this.ownCount}!`);
  }
}
