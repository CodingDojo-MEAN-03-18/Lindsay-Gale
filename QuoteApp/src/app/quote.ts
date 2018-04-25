export class Quote {
  id: number;
  quote: string;
  author: string;
  rating: number;

  constructor() {
    this.id = Math.floor(Math.random() * 1000);
  }
}
