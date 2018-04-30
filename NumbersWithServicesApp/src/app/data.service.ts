import { Injectable } from "@angular/core";

@Injectable()
export class DataService {
  alphaNumbers: number[] = [6, 5, 4];
  betaNumbers: number[] = [3, 2];
  otherNumbers: number[] = [0];
  sumAlphaBeta: number;

  constructor() {}

  retrieveNumbers(componentName): number[] {
    if ((componentName = 1)) {
      return this.alphaNumbers;
    }
    if ((componentName = 2)) {
      return this.betaNumbers;
    }
  }

  sumNumbers(): number {
    for (const alpha of this.alphaNumbers) {
      this.sumAlphaBeta += alpha;
    }
    for (const beta of this.betaNumbers) {
      this.sumAlphaBeta += beta;
    }
    return this.sumAlphaBeta;
  }
}
