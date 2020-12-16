import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from 'src/app/page/components/product-list/product-list.component';
import { PageComponent } from 'src/app/page/page.component';
import { ProductItemComponent } from 'src/app/page/components/product-item/product-item.component';

@NgModule({
  declarations: [PageComponent, ProductListComponent, ProductItemComponent],
  imports: [CommonModule],
  exports: [PageComponent, ProductListComponent, ProductItemComponent],
})
export class CatalogModule {}
