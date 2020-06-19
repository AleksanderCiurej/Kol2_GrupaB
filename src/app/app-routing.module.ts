import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ACForumComponent} from './components/ac-forum/ac-forum.component';
import {ACForumItemDetailsComponent} from './components/ac-forum-item-details/ac-forum-item-details.component';


const routes: Routes = [
  {
    path: '',
    component: ACForumComponent
  },
  {
    path: 'ac-forum/detail/:id',
    component: ACForumItemDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
