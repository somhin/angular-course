import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../classes/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  @Output() OnSelected: EventEmitter<ProductItemComponent> = new EventEmitter();

  isSelected: boolean;
  constructor() {}

  ngOnInit(): void {}

  select(): void {
    this.OnSelected.emit(this);
  }
}
