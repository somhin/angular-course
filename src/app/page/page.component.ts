import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { BackendService } from '../backend.service';
import { ProductListComponent } from './components/product-list/product-list.component';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements AfterViewInit {
  @ViewChild('productList')
  productList: ProductListComponent;

  constructor(private backendService: BackendService) {}

  ngAfterViewInit(): void {
    this.productList.products = this.backendService.getProduct();
  }
}
