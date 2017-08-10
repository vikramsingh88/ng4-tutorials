import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  interval:any;
  @Output('counterEvent') event = new EventEmitter<{counter:number}>();
  count:number = 1;
  constructor() { }

  ngOnInit() {
  }

  start() {
    this.interval = setInterval(() => {
      this.event.emit({counter:this.count++});
    }, 1000);
  }

  stop() {
    clearInterval(this.interval);
  }

}
