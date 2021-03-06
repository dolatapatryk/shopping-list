import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouchListLayoutComponent } from './touch-list-layout.component';

describe('TouchListLayoutComponent', () => {
  let component: TouchListLayoutComponent;
  let fixture: ComponentFixture<TouchListLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouchListLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouchListLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
