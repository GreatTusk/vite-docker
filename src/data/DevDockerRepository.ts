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
    console.log("Are we even in the products route?");
    console.log("If we're in /, this is bad news!");
  }

  greet(from: string) {
    console.log(
      `Greeting from Dev Docker Repository #${this.ownCount}, ${from}!`,
    );
  }
}
