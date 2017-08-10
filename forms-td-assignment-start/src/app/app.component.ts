import { Component, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') form : NgForm;
  isSubmitted = false;

  user = {
    email:'',
    password : '',
    option : ''
  }

  defaultOption="Advanced";

  onSubmit() {
    console.log(this.form);
    this.isSubmitted = true;
    this.user.email = this.form.value.email;
    this.user.password = this.form.value.password;
    this.user.option = this.form.value.opt;
    this.form.reset();
  }
}
