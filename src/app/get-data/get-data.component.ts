import {Component, OnInit, OnDestroy, OnChanges, SimpleChanges, Renderer2, ElementRef, Directive} from '@angular/core';
import {HttpService} from '../http.service';
import {Subscription, interval} from 'rxjs';
import { takeWhile } from 'rxjs/operators';

import { WebsocketService } from '../websocket.service';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.scss']
})
@Directive({
  selector: '[changedData]'
})
export class GetDataComponent implements OnInit, OnDestroy, OnChanges {

  update = false;

  dataSubscription: Subscription;
  sub: Subscription;
  dynamicData;
  allData;

  isAlive = false;

  constructor(private httpService: HttpService,
              private renderer: Renderer2,
              private el: ElementRef,
              private sockService: WebsocketService) { }

  ngOnInit() {
    this.isAlive = true;
    this.getAll();
    this.dataSubscription = interval(1000).pipe(takeWhile(() => this.isAlive)).subscribe(v => {
      if (v) {
        this.getTestData();
      }
    });
  }

  ngOnDestroy() {
    this.isAlive = false;
    this.dataSubscription.unsubscribe();
  }

  ngOnChanges() {
    this.renderer.setStyle(this.el.nativeElement, 'color', 'blue');
  }

  getAll() {
    const observable = this.httpService.getAll();
    observable.subscribe(data => {
      this.allData = data;
      console.log('Results from Mongo:', this.allData);
    });
  }
  deleteData(id) {
    const observable = this.httpService.deleteData(id);
    observable.subscribe(data => {
      console.log('Data deleted:', data);
      this.getAll();
    });
  }
  getTestData() {
    const observable = this.httpService.readData();
    observable.subscribe(data => {
      this.dynamicData = data;
    })
  }

  changeName(event, id) {
    if (event.key === "Enter") {
      const data = {
        name: event.target.value,
        updatedAt: new Date()
      };
      const ob = this.httpService.updateData(id, data);
      ob.subscribe(data => {
        console.log('Success!', data);
        this.getAll();
        this.update = false;
      }, error => {
        console.log(error);
      })
    }
  }

  updateField(e, id) {
    if (e.path[2].id === id) {
      e.target.classList.add('hide');
      e.target.nextSibling.classList.remove('hide');
    }
  }

}
