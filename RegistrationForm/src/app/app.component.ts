
import { Component } from '@angular/core';
import { User } from './user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Registration Form';
  user: User = new User();
  users: Array<User> = [];

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('Registration form has been submitted!', this.user);
    this.users.push(this.user);
    this.user = new User();
    form.reset();
  }
}