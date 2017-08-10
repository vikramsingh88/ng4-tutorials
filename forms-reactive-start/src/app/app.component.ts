import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  genders = ['male', 'female'];

  formGroup : FormGroup;

  forbiddenusernames = ['Chris', 'Anna'];

  ngOnInit() {
    this.formGroup = new FormGroup({
      'userData' : new FormGroup({
        'username' : new FormControl(null, [Validators.required, this.forbiddenName.bind(this)]),
        'email' : new FormControl(null, [Validators.required, Validators.email])
      }),
      'gender' : new FormControl('male'),
      'hobbies' : new FormArray([])
    });
  }


  onSubmit() {
    console.log(this.formGroup);
  }

  addHubby() {
    const hobby = new FormControl(null, Validators.required);
    (<FormArray>this.formGroup.get('hobbies')).push(hobby);
  }

  //My custom Validators
  forbiddenName(control : FormControl) : {[s : string] : boolean} {
    if(this.forbiddenusernames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden' : true}
    }
    return null;
  }
}
