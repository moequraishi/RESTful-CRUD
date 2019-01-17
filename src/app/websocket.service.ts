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

  constructor(private http: HttpClient) { }

  rtUpdate() {
    this.socket = io('http://localhost:1337');
    this.socket.emit('get-all');

    return this.http.get('/users');
  }

}
