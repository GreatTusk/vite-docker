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
    console.log("We are in the products route!");
  }

  greet(from: string) {
    console.log(
      `Greeting from Prod Products Repository #${this.ownCount}, ${from}!`,
    );
  }
}
