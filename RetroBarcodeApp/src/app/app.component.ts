import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Retro Barcode Generator';

  colorArray = [];
  
  setColorArray() {

    for (let index = 0; index < 10; index++){
      const randomNum = (Math.floor(Math.random() * 8)) + 1;

      if (randomNum === 1) {
        this.colorArray.push('CadetBlue');
      } 
      else if (randomNum === 2) {
        this.colorArray.push('Chartreuse');
      } 
      else if (randomNum === 3) {
        this.colorArray.push('Chocolate');
      } 
      else if (randomNum === 4) {
        this.colorArray.push('Coral');
      } 
      else if (randomNum === 5) {
        this.colorArray.push('CornflowerBlue');
      } 
      else if (randomNum === 6) {
        this.colorArray.push('Chartreuse');
      } 
      else if (randomNum === 7) {
        this.colorArray.push('DarkCyan');
      } 
      else if (randomNum === 8) {
        this.colorArray.push('DarkGoldenRod');
      } 
      else if (randomNum === 9) {
        this.colorArray.push('DarkGoldenRod');
      }
    }
  }

  ngOnInit() {
    this.setColorArray();
  }
}
