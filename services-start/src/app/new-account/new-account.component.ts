import { Component } from '@angular/core';

import {AccountService} from '../services/account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {

  constructor(private accountServive : AccountService) {
    accountServive.statusChanged.subscribe((status:string) => {
      alert(status);
    });
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountServive.addAccount(accountName, accountStatus)
  }
}
