import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  even = [];
  odd = [];
  onCounterEvent(event : {counter:number}) {
    if(event.counter%2 ==0) {
      this.even.push(event.counter);
    } else {
      this.odd.push(event.counter);
    }
  }
}
