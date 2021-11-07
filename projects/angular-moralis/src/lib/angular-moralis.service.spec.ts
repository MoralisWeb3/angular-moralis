import { TestBed } from '@angular/core/testing';
import { AngularMoralisService } from './angular-moralis.service';


describe('AngularMoralisService', () => {
  let service: AngularMoralisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularMoralisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
