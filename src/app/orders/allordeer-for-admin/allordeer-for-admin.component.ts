import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IFinance, IOrder, IOrderItem } from 'src/app/shared/models/order';
import { environment } from 'src/environments/environment';




import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-allordeer-for-admin',
  templateUrl: './allordeer-for-admin.component.html',
  styleUrls: ['./allordeer-for-admin.component.scss']
})
export class AllordeerForAdminComponent implements OnInit {
orders:IOrder[]
  constructor(private orderService: OrdersService,private http :HttpClient,private router:Router) {

  }
  baseUrl = environment.baseUrl;


  ngOnInit(): void {
    this.getAllOrders();
  }

  getAllOrders() {
    this.orderService.getAllOrders().subscribe(
      (orders: IOrder[]) => {
        this.orders = orders;
        console.log(orders);

      },
      (err) => {
        console.log(err);
      }
    );
  }
pass(id){
  this.orderService.pass(id,1).subscribe((res)=>console.log(res) ,(err)=>{
    console.log(err);

  });

  window.location.reload();


}
Reject(id){
  this.orderService.pass(id,2).subscribe(res=>console.log(res));

window.location.reload();
}

  // edit(id:number,Status:IOrder){


  // }

}


