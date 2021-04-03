import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListAddComponent } from './product-list-add.component';

describe('ProductListAddComponent', () => {
  let component: ProductListAddComponent;
  let fixture: ComponentFixture<ProductListAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
