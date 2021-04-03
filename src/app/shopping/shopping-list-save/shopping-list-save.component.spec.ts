import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListSaveComponent } from './shopping-list-save.component';

describe('ShoppingListSaveComponent', () => {
  let component: ShoppingListSaveComponent;
  let fixture: ComponentFixture<ShoppingListSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingListSaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingListSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
