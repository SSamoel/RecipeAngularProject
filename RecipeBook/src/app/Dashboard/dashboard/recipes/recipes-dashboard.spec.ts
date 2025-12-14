import { TestBed } from '@angular/core/testing';

import { RecipesDashboard } from './recipes-dashboard';

describe('RecipesDashboard', () => {
  let service: RecipesDashboard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipesDashboard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
