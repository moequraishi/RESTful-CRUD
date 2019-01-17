import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class DynamicService {
  data: BehaviorSubject<Object>;

  constructor(private http: HttpClient) {
    this.getData();
    this.data = new BehaviorSubject<Object>({});
  }

  getData() {
    this.http.get('/users').subscribe(data => {
      this.data.next(data);
    });
  }
}
