export class DockerRepository {
  static instanceCount = 0;
  private readonly ownCount: number;

  constructor() {
    DockerRepository.instanceCount++;
    this.ownCount = DockerRepository.instanceCount;
    console.log("Creating Docker Repository! I'm being eagerly initialized!");
    console.log("Are we even in the products route?");
    console.log("If we're in /, this is bad news!");
  }

  greet() {
    console.log(`Greeting from Docker Repository n${this.ownCount}!`);
  }
}
