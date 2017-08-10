import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  projectForm: FormGroup;

  ngOnInit() {
    this.projectForm = new FormGroup({
      'projectname': new FormControl(null, Validators.required, this.asynForbiddenProjectName),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl('Stable')
    });
  }

  onSubmit() {
    console.log(this.projectForm);
  }
  // Synchronous validators
  forbiddenProjectName(control: FormControl): { [s: string]: boolean } {
    if ('Test' === control.value) {
      return { 'invalidProjectName': true };
    }
    return null;
  }

  // Asynchronous validators
  asynForbiddenProjectName(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          resolve({'invalidProjectName': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
