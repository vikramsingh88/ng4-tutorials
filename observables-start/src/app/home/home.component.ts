import { Component, OnInit, OnDestroy } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/Rx';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  numberSubscription : Subscription;
  myObservableSubscription : Subscription;
  constructor() { }

  ngOnInit() {
    const myNumber = Observable.interval(1000)
    .map((data : number) => {
      return data*3;
    });
    this.numberSubscription = myNumber.subscribe((number : number) => {
      console.log(number);
    });

    const myObservable = Observable.create((observer : Observer<string>) => {
      setTimeout(() => {
        observer.next('First package');
      },2000);

      setTimeout(() => {
        observer.next('Second package');
      },4000);

      setTimeout(() => {
        //observer.error('Error package');
        observer.complete();
      },5000);

      setTimeout(() => {
        observer.next('Third package');
      },6000);
    });

    this.myObservableSubscription = myObservable.subscribe((text : string) => {
      console.log(text);
    },
    (error : string) => {
      console.log(error);
    },
    () => {
      console.log('completed');
    });
  }

  ngOnDestroy() {
    this.myObservableSubscription.unsubscribe();
    this.numberSubscription.unsubscribe();
  }

}
