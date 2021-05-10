import { TestBed } from '@angular/core/testing';

import { ShoppingCartEndpoint } from './shopping-cart-endpoint.service';

describe('ShoppingCartEndpointService', () => {
  let service: ShoppingCartEndpoint;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppingCartEndpoint);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
