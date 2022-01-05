import { Component, OnInit } from '@angular/core';
import { IOrder } from 'src/app/shared/models/order';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-allordeer-for-admin',
  templateUrl: './allordeer-for-admin.component.html',
  styleUrls: ['./allordeer-for-admin.component.scss']
})
export class AllordeerForAdminComponent implements OnInit {
orders:IOrder[]
  constructor(private orderService: OrdersService) { 
  
  }
  
 
  
  ngOnInit(): void {
    this.getAllOrders();
  } 

  getAllOrders() {
    this.orderService.getAllOrdersForUser().subscribe(
      (orders: IOrder[]) => {
        this.orders = orders;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}


