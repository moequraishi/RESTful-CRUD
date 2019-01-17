import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UserNewComponent } from './user-new/user-new.component';
import { GetDataComponent } from './get-data/get-data.component';
import {WebsocketService} from './websocket.service';

const config: SocketIoConfig = { url: 'http://localhost:1337', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    UserNewComponent,
    GetDataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [HttpService, WebsocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
