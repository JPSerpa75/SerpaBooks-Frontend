import { TestBed } from '@angular/core/testing';
import { filterOptionsService } from './filter-options.service';


describe('FilterOptionsServiceService', () => {
  let service: filterOptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(filterOptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
