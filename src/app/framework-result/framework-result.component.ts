import { Component, ElementRef, Input, SimpleChanges, SimpleChange, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-framework-result',
  templateUrl: './framework-result.component.html',
  styleUrls: ['./framework-result.component.css']
})
export class FrameworkResultComponent implements OnInit, OnChanges {

  @Input() result: string;

  nativeElement: any;

  constructor(private element: ElementRef) {
    this.nativeElement = element.nativeElement;
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    const result: SimpleChange = changes.result;
    this.nativeElement.firstElementChild.innerHTML = result.currentValue;
  }

}
