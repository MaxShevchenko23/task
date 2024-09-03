import { TestBed } from '@angular/core/testing';

import { LinkInfoService } from './link-info.service';

describe('LinkInfoService', () => {
  let service: LinkInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinkInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
