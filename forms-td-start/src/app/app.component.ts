import { Component, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('form') ngForm : NgForm;
  defaultQuestion = 'pet';
  answer = '';
  gender = ['male', 'female'];

  isSubmitted : boolean = false;

  user = {
    username:'',
    email : '',
    que : '',
    ans : '',
    gender : ''
  };

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.ngForm.form.patchValue({
      userData : {
        username: suggestedName
      }
    });
  }

  /*onSubmit(form : NgForm) {
    console.log(form);
  }*/

  onSubmit() {
    this.isSubmitted = true;
    console.log(this.ngForm);
    this.user.username = this.ngForm.value.userData.username;
    this.user.email = this.ngForm.value.userData.email;

    this.ngForm.reset();
  }
}
