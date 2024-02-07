import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './components/order/order.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  {
    path:"cart", component: CartComponent
  },{
    path:"order", component: OrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
