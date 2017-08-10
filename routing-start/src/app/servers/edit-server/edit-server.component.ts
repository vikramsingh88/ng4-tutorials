import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

import { ServersService } from '../servers.service';
import {CanComponentDeactivate} from './can-deactivate.guard';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  isAllowEdit : boolean = false;
  changesSaved = false;

  constructor(private serversService: ServersService, private route :ActivatedRoute, private router : Router) { }

  ngOnInit() {
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;

    this.route.params.subscribe((params:Params) => {
      console.log(params['id']);
    });
    this.route.queryParams.subscribe((params:Params) => {
      this.isAllowEdit = params['allowEdit'] === '1' ? true : false;
      console.log(params['allowEdit']);
    });
    this.route.fragment.subscribe((param:string) => {
      console.log(param);
    });
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    this.router.navigate(['../'], {relativeTo : this.route});
  }

  canDeactivate() : Observable<boolean> | Promise<boolean> | boolean {
    if(!this.isAllowEdit){
      return true;
    }

    if((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSaved) {
      return confirm('Do you want to discard the changes?');
    } else {
      true;
    }
  }

}
