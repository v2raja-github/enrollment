import { TestBed, async, inject } from '@angular/core/testing';

import { UserauthGuard } from './userauth.guard';

describe('UserauthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserauthGuard]
    });
  });

  it('should ...', inject([UserauthGuard], (guard: UserauthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
