import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as io from 'socket.io-client';
import { Observable, Subject } from 'rxjs';
import * as Rx from 'rxjs/Rx';
import { environment } from '../environments/environment';

@Injectable()
export class WebsocketService {

  // Our socket connection
  private socket;

  constructor(private http: HttpClient) {
    this.socket = io.connect('http://localhost:1337');
  }

  testUpdate(data) {
    return this.http.post('/updateTest', {message: data});
  }

  rtUpdate(id, data) {
    return this.http.post('/update/' + id, data);
  }

  rtGet() {
    return this.http.get('/users');
  }
  rtGetAll() {
    return this.http.get('/all');
  }

}
