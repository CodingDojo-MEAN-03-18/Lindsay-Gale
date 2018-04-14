import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'US Time Zone Display';
  currentDate = new Date();
  currentTimeZone = "";

  setTimeZone(data) {

    this.currentDate = new Date();

    if (data == 1) {
      this.currentTimeZone = "PST";
      this.currentDate.setHours(this.currentDate.getHours());
    }

    else if (data == 2) {
      this.currentTimeZone = "MST";
      this.currentDate.setHours(this.currentDate.getHours() + 1);
    }

    else if (data == 3) {
      this.currentTimeZone = "CST";
      this.currentDate.setHours(this.currentDate.getHours() + 2);
    }

    else if (data == 4) {
      this.currentTimeZone = "EST";
      this.currentDate.setHours(this.currentDate.getHours() + 3);
    }

  }

}