import { Component, ElementRef, OnInit, Input, Output, EventEmitter } from '@angular/core';

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

  nativeElement: any;

  likeCount = 0;
  dislikeCount = 0;

  constructor(private element: ElementRef) {
    this.nativeElement = element.nativeElement;
  }

  ngOnInit() {
    const result = document.querySelector('framework-result');

    this.nativeElement.addEventListener('like', (event) => {
      console.log('You Liked Angular ...');
      result.firstElementChild.innerHTML = "Up Vote :  " + event.detail;
      console.log(event);
    });
    
    this.nativeElement.addEventListener('dislike', (event) => {
      console.log('You Do not like Angular...');
      result.firstElementChild.innerHTML = "Down Vote:  " + event.detail;
      console.log(event);
    });
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
