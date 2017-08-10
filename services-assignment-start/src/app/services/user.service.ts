import { Injectable } from '@angular/core';

import {CounterService} from './counter.service';

@Injectable()
export class UserService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  inactivateCounter : number = 0;
  activateCounter : number = 0;

  constructor(private counterService : CounterService) { }

  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.inactivateCounter = this.inactivateCounter+1;
    this.counterService.logToInactivateOperation(this.inactivateCounter);

    if(this.activeUsers.length ==0) {
      this.inactivateCounter = 0
    }
  }

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.activateCounter = this.activateCounter+1;
    this.counterService.logToActivateOperation(this.activateCounter);

    if(this.inactiveUsers.length ==0) {
      this.activateCounter = 0
    }
  }

}
