import { Component, OnInit } from "@angular/core";
import { Quote } from "../../quote";
import { QUOTES } from "../../data/quote-data";

@Component({
  selector: "app-quote-list",
  templateUrl: "./quote-list.component.html",
  styleUrls: ["./quote-list.component.css"]
})
export class QuoteListComponent {
  quotes: Quote[] = QUOTES;
  selectedQuote: Quote;

  selectBook(quote: Quote) {
    this.selectedQuote = this.selectedQuote === quote ? null : quote;
    console.log("Selected quote: ", this.selectedQuote);
  }

  onCreate(event: Quote) {
    console.log("Creating a new quote!", event);
    this.quotes.push(event);
  }
}
