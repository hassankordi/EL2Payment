import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDetailedComponent } from './order-detailed/order-detailed.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AllordeerForAdminComponent } from './allordeer-for-admin/allordeer-for-admin.component';
import { CompletedOrderComponent } from './completed-order/completed-order.component';
import { InventoryComponent } from './inventory/inventory.component';

@NgModule({
  declarations: [OrderDetailedComponent, AllordeerForAdminComponent, CompletedOrderComponent, InventoryComponent],
  imports: [CommonModule, OrdersRoutingModule, SharedModule],
})
export class OrdersModule {}
