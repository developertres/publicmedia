import { Component, OnInit } from '@angular/core';

import { environment } from '../../../environments/environment';
import { LastPost } from './last-post';
import { LastPostService } from './last-post.service';

@Component({
  selector: 'pm-last-post',
  templateUrl: './last-post.component.html',
  styleUrls: ['./last-post.component.css']
})
export class LastPostComponent implements OnInit {

  lastPost: LastPost;

  constructor(private lastPostService: LastPostService) { }

  ngOnInit(): void {
    this.lastPost = {} as LastPost;
    this.lastPostService.get(environment.userId).subscribe(lastPost => this.lastPost = lastPost);
  }
}
