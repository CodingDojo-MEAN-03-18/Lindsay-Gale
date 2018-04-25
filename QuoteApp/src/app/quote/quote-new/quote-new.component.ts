import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Quote } from "../../quote";

@Component({
  selector: "app-quote-new",
  templateUrl: "./quote-new.component.html",
  styleUrls: ["./quote-new.component.css"]
})
export class QuoteNewComponent implements OnInit {
  quote: Quote = new Quote();

  @Output() createQuote = new EventEmitter<Quote>();

  constructor() {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    console.log("Quote form has been submitted!", this.quote, form);

    this.createQuote.emit(this.quote);

    this.quote = new Quote();

    form.reset();
  }
}
