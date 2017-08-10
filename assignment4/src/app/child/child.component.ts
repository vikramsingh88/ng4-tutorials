import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  name:string;

  @Output() nameAdded = new EventEmitter<{name:string}>();
  constructor() { }

  ngOnInit() {
  }

  add() {
    this.nameAdded.emit({name:this.name});
  }

}
