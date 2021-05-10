import { Injectable } from '@angular/core';
import { ApiDataService } from 'src/app/core/services/api-data.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartEndpoint {

  constructor(private apiDataService: ApiDataService) { }
}
