import { TestBed, inject } from '@angular/core/testing';

import { CryptomonedaService } from './cryptomoneda.service';

describe('CryptomonedaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CryptomonedaService]
    });
  });

  it('should be created', inject([CryptomonedaService], (service: CryptomonedaService) => {
    expect(service).toBeTruthy();
  }));
});
