export class DockerRepository {
  static instanceCount = 0;
  private readonly ownCount: number;

  constructor() {
    DockerRepository.instanceCount++;
    this.ownCount = DockerRepository.instanceCount;
    console.log("Creating Docker Repository!");
  }

  greet() {
    console.log(`Greeting from Docker Repository n${this.ownCount}!`);
  }
}
