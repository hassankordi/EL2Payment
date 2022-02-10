import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServerErrorComponent } from './core/server-error/server-error.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { AuthGuard } from './core/guards/auth.guard';
import { CheckoutReviewComponent } from './checkout/checkout-review/checkout-review.component';
import { AllordeerForAdminComponent } from './orders/allordeer-for-admin/allordeer-for-admin.component';
import { OrderFinanceComponent } from './order-finance/order-finance.component';
import { CreateProducTypeComponent } from './shop/create-produc-type/create-produc-type.component';
import { CreateProducBrandComponent } from './shop/create-produc-brand/create-produc-brand.component';
import { CompletedOrderComponent } from './orders/completed-order/completed-order.component';
import { InventoryComponent } from './orders/inventory/inventory.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { breadcrumb: 'Home' } },
  {
    path: 'server-error',
    component: ServerErrorComponent,
    data: { breadcrumb: 'Server Error' },
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
    data: { breadcrumb: 'Not Found' },
  },
  {
    path: 'shop',
    loadChildren: () =>
      import('./shop/shop.module').then((mod) => mod.ShopModule),
    data: { breadcrumb: 'Shop' },
  },
  {
    path: 'basket',
    loadChildren: () =>
      import('./basket/basket.module').then((mod) => mod.BasketModule),
    data: { breadcrumb: 'Basket' },
  },
  {
    path: 'checkout',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./checkout/checkout.module').then((mod) => mod.CheckoutModule),
    data: { breadcrumb: 'Checkout' },
  },
  {
    path: 'orders',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./orders/orders.module').then((mod) => mod.OrdersModule),
    data: { breadcrumb: 'Orders' },
  },
  { path:'allorders', component:AllordeerForAdminComponent},
  { path:'Inventory', component:InventoryComponent},
  { path:'types', component:CreateProducTypeComponent},
  { path:'brand', component:CreateProducBrandComponent},

  { path:'finance', component:OrderFinanceComponent},
  { path:'comOrder', component:CompletedOrderComponent},


  { path:'review', component: CheckoutReviewComponent},
  {
    path: 'account',
    loadChildren: () =>
      import('./account/account.module').then((mod) => mod.AccountModule),
    data: { breadcrumb: { skip: true } },
  },

  { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
