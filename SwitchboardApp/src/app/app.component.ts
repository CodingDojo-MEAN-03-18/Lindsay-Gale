import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Switchboard';
  buttons = [false, false, false, false, false, false, false, false, false, false];

  updateStatus(idx) {
    this.buttons[idx] = !this.buttons[idx];
  }

  /* buttonPosition = [0, 1, 2, 3, 4, 5, 6, 7];
  buttonStatusArray = [false, false, false, false, false, false, false, false];
  currentButtonStatus = "OFF";

  onButtonClick(clickData) {

    console.log("Button #", clickData, "was clicked!");
    console.log("Status of Button#", this.buttonStatusArray[clickData -1]);
    
    var arrayIndex = clickData - 1;
    if (this.buttonStatusArray[arrayIndex] = false) {
      this.currentButtonStatus = "ON"
    }
    else {
      this.currentButtonStatus = "OFF"
    }
  } */

}
