import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworkResultComponent } from './framework-result.component';

describe('FrameworkResultComponent', () => {
  let component: FrameworkResultComponent;
  let fixture: ComponentFixture<FrameworkResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameworkResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameworkResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
