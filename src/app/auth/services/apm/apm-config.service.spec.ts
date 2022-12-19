import { TestBed } from '@angular/core/testing';

import { ApmConfigService } from './apm-config.service';

describe('ApmConfigService', () => {
  let service: ApmConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApmConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
