import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Power Levels';
  power: Number = 1;

  @Output() calculatePowers = new EventEmitter<Number>();

  constructor() { }

  ngOnInit() { }

  newPowerSubmit(newPower: NgForm) {
    console.log(newPower);
  }

}
