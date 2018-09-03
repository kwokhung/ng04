import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-framework-vote',
  templateUrl: './framework-vote.component.html',
  styleUrls: ['./framework-vote.component.css']
})
export class FrameworkVoteComponent implements OnInit {

  @Input() logo: string;
  @Input() title: string;
  @Output() like = new EventEmitter();
  @Output() dislike = new EventEmitter();

  likeCount = 0;
  dislikeCount = 0;

  constructor() { }

  ngOnInit() {
  }

  vote(type: string) {
    if (type === 'like') {
      this.likeCount++;
      this.like.emit(this.likeCount);
    }
    else {
      this.dislikeCount++;
      this.dislike.emit(this.dislikeCount);
    }
  }

}
