import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesDashboardList } from './recipes-dashboard-list';

describe('RecipesDashboardList', () => {
  let component: RecipesDashboardList;
  let fixture: ComponentFixture<RecipesDashboardList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecipesDashboardList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipesDashboardList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
