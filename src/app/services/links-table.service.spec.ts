import { TestBed } from '@angular/core/testing';

import { LinksTableService } from './links-table.service';

describe('LinksTableService', () => {
  let service: LinksTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinksTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
