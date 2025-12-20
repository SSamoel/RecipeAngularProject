import { TestBed } from '@angular/core/testing';

import { RecipesDashboardServices } from './recipes-dashboard-services';

describe('RecipesDashboardServices', () => {
  let service: RecipesDashboardServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipesDashboardServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
