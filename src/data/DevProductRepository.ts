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
    console.log("We are in the products route!");
  }

  greet(from: string) {
    console.log(
      `Greeting from Dev Products Repository #${this.ownCount}, ${from}!`,
    );
  }
}
