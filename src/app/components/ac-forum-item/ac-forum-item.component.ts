import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ac-forum-item',
  templateUrl: './ac-forum-item.component.html',
  styleUrls: ['./ac-forum-item.component.css']
})
export class ACForumItemComponent implements OnInit {
  @Input() title: string;
  @Input() text: string;
  @Input() id: number;
  @Input() image: string;
  constructor() { }

  ngOnInit(): void {
  }

}
