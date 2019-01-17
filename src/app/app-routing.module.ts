import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {UserNewComponent} from './user-new/user-new.component';
import {AppComponent} from './app.component';
import {GetDataComponent} from './get-data/get-data.component';

const routes: Routes = [
  {path: 'new', component: UserNewComponent},
  {path: 'get', component: GetDataComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
