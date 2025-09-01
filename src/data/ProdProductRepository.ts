import { ProductRepository } from "../domain/ProductRepository.ts";

export class ProdProductRepository implements ProductRepository {
  static instanceCount = 0;
  private readonly ownCount: number;

  constructor() {
    ProdProductRepository.instanceCount++;
    this.ownCount = ProdProductRepository.instanceCount;
    console.log(
      `Creating Products Prod Repository #${this.ownCount}! I'm being lazily initialized!`,
    );
    console.log("Are we even in the products route?");
    console.log("If we're in /, this is bad news!");
  }

  greet(from: string) {
    console.log(
      `Greeting from Prod Products Repository #${this.ownCount}, ${from}!`,
    );
  }
}
