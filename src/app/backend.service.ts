import { Injectable } from '@angular/core';
import { Product } from '../app/page/classes/product';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor() {
    console.log('service injected');
  }

  getProduct(): Product[] {
    console.log('get product() invoke');
    const p1 = new Product();
    p1.name = 'ส้มโอ';
    p1.price = 80;

    const p2 = new Product();
    p2.name = 'แตงโม';
    p2.price = 60;

    return [p1, p2];
  }
}
