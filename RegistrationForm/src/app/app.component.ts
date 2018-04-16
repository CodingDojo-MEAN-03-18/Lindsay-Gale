
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Registration Form';
  user = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    feelsLucky: ''
  };
  users = [];

  onSubmit() {
    this.users.push(this.user);
    this.user = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      feelsLucky: ''
    };
  }
}