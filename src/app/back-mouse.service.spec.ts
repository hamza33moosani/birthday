import { TestBed } from '@angular/core/testing';

import { BackMouseService } from './back-mouse.service';

describe('BackMouseService', () => {
  let service: BackMouseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackMouseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
