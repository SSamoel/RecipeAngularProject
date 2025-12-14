import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewRecipe } from './add-new-recipe';

describe('AddNewRecipe', () => {
  let component: AddNewRecipe;
  let fixture: ComponentFixture<AddNewRecipe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddNewRecipe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewRecipe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
