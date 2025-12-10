import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesList } from './recipes-list';

describe('RecipesList', () => {
  let component: RecipesList;
  let fixture: ComponentFixture<RecipesList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecipesList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipesList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
