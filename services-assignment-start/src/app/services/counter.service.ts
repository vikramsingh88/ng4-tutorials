import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {

  constructor() { }

  logToActivateOperation(counter : number) {
    console.log('Activate : ',counter);
  }

  logToInactivateOperation(counter : number) {
    console.log('Inactivate : ',counter);
  }

}
