import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-alpha",
  templateUrl: "./alpha.component.html",
  styleUrls: ["./alpha.component.css"]
})
export class AlphaComponent implements OnInit {
  alphaNumbers = [];

  constructor(private _dataService: DataService) {}

  ngOnInit() {
    this.alphaNumbers = this._dataService.retrieveNumbers("alpha");
  }
}
