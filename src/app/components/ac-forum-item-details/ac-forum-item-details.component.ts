import { Component, OnInit } from '@angular/core';
import {ACDataService} from '../../../services/ac-data.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'ac-forum-item-details',
  templateUrl: './ac-forum-item-details.component.html',
  styleUrls: ['./ac-forum-item-details.component.css']
})
export class ACForumItemDetailsComponent implements OnInit {
  public image = '';
  public text: string;
  public id: number;
  public title: string;

  constructor(private acDataService: ACDataService, private route: ActivatedRoute) { }

  ngOnInit(){
    let id: string;
    this.route.paramMap
      .subscribe(params => {
        id = params.get('id');
      });

    this.acDataService.getPostById(id).subscribe(res => {
      this.image = res['image'];
      this.text = res['text'];
      this.id = res['id'];
      this.title = res['title'];
    });
  }

}
