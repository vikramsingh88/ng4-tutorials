import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isDisplay = false;
  buttonName = 'Display Details';
  buttonClickedLog = [];
  counter:number = 1;

  toggle() {
    this.isDisplay = !this.isDisplay;
    this.buttonName = this.isDisplay ? 'Hide Details' : 'Display Details';
    this.buttonClickedLog.push(this.counter++);
  }

  getBackgroundColor(c) {
    return c>=5 ? 'blue' : '';
  }

  getFiftItem(c) {
    return c>=5 ? 'white' : '';
  }
}
