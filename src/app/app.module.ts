import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ACForumComponent } from './components/ac-forum/ac-forum.component';
import { ACForumItemComponent } from './components/ac-forum-item/ac-forum-item.component';
import { ACForumItemDetailsComponent } from './components/ac-forum-item-details/ac-forum-item-details.component';
import {ACDataService} from '../services/ac-data.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ACForumComponent,
    ACForumItemComponent,
    ACForumItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ACDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
