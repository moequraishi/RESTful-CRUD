import {AfterViewInit, Component, OnInit} from '@angular/core';
import { HttpService } from './http.service';
import { Subscription } from 'rxjs';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'RESTful Service';
  dataObj;

  dataSubscription: Subscription;
  dynamicData;

  constructor(private httpService: HttpService) {

  }

  ngOnInit() {
  }

  readData() {
    const observable = this.httpService.readData();
    observable.subscribe(data => {
      console.log(data);
      this.dataObj = data;
    });
    this.dataSubscription = observable.subscribe(data => {
      this.dynamicData = data;
    });
  }
}
