import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentsLayoutComponent } from './departments-layout.component';

describe('DepartmentsLayoutComponent', () => {
  let component: DepartmentsLayoutComponent;
  let fixture: ComponentFixture<DepartmentsLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentsLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
