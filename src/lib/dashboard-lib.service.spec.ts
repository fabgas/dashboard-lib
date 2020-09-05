import { TestBed } from '@angular/core/testing';

import { DashboardLibService } from './dashboard-lib.service';

describe('DashboardLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashboardLibService = TestBed.get(DashboardLibService);
    expect(service).toBeTruthy();
  });
});
