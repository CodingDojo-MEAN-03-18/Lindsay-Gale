import { Quote } from "../quote";

export const QUOTES: Quote[] = [
  {
    id: randomID(),
    quote: "Get busy living or get busy dying.",
    author: "Stephen King",
    rating: 0
  },
  {
    id: randomID(),
    quote:
      "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.",
    author: "Mark Twain",
    rating: 0
  },
  {
    id: randomID(),
    quote:
      "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
    author: "Eleanor Roosevelt",
    rating: 0
  },
  {
    id: randomID(),
    quote: "Those who dare to fail miserably can achieve greatly.",
    author: "John F. Kennedy",
    rating: 0
  }
];

function randomID(): number {
  return Math.floor(Math.random() * 1000);
}
