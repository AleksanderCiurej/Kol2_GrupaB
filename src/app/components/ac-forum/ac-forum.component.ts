import { Component, OnInit } from '@angular/core';
import {ACDataService} from '../../../services/ac-data.service';

@Component({
  selector: 'ac-forum',
  templateUrl: './ac-forum.component.html',
  styleUrls: ['./ac-forum.component.css']
})
export class ACForumComponent implements OnInit {

  public posts: any;

  constructor(private acDataService: ACDataService) { }

  ngOnInit(): void {
    this.acDataService.getAllPosts().subscribe(data => {
      console.log(data);
      this.posts = data;
    });
  }
}
