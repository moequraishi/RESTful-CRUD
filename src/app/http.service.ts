import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get('/all');
  }

  createData(data) {
    return this.http.post('/new', data);
  }

  readData() {
    return this.http.get('/users');
  }

  updateData(id, data) {
    return this.http.post('/update/' + id, data);
  }

  deleteData(id) {
    return this.http.post('/delete/' + id, false);
  }
}
