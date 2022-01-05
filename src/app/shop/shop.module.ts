import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { SharedModule } from '../shared/shared.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShopRoutingModule } from './shop-routing.module';
import { ProductCreateComponent } from './product-create/product-create.component';
import { CreateProducTypeComponent } from './create-produc-type/create-produc-type.component';
import { CreateProducBrandComponent } from './create-produc-brand/create-produc-brand.component';

@NgModule({
  declarations: [ShopComponent, ProductItemComponent, ProductDetailsComponent, ProductCreateComponent, CreateProducTypeComponent, CreateProducBrandComponent],
  imports: [CommonModule, SharedModule, ShopRoutingModule],
})
export class ShopModule {}
