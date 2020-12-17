import { Component, OnInit, ViewChild } from '@angular/core';
import { BackendService } from '../backend.service';
import { Product } from './classes/product';
import { ProductListComponent } from './components/product-list/product-list.component';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit {
  @ViewChild('productList')
  productList: ProductListComponent;

  constructor(private backendService: BackendService) {}

  ngOnInit(): void {
    this.productList.products = this.backendService.getProduct();
  }
}
