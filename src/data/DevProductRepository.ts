import { ProductRepository } from "../domain/ProductRepository.ts";

export class DevProductRepository implements ProductRepository {
  static instanceCount = 0;
  private readonly ownCount: number;

  constructor() {
    DevProductRepository.instanceCount++;
    this.ownCount = DevProductRepository.instanceCount;
    console.log(
      `Creating Products Dev Repository #${this.ownCount}! I'm being lazily initialized!`,
    );
    console.log("Are we even in the products route?");
    console.log("If we're in /, this is bad news!");
  }

  greet(from: string) {
    console.log(
      `Greeting from Dev Products Repository #${this.ownCount}, ${from}!`,
    );
  }
}
