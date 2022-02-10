import { Component, OnInit } from '@angular/core';
import { IOrder } from 'src/app/shared/models/order';
import { OrdersService } from '../orders.service';
 import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-completed-order',
  templateUrl: './completed-order.component.html',

  styleUrls: ['./completed-order.component.scss']
})
export class CompletedOrderComponent implements OnInit {
  stockDelevery : FormGroup ;
  closeDialog = true ;
  orders: IOrder[];
  picturUrl:any;
  selectedBill:any="";

  constructor(private orderService: OrdersService,private sanitizer: DomSanitizer,private fb  :FormBuilder, public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(CompletedOrderComponent, {
      data: {
        animal: 'panda',
      },
    });
  }

  ngOnInit(): void {
    this.getOrders()
  }

  openModal(obj){
 // alert(id);
      console.log(obj);
    this.selectedBill=obj;
    (document.getElementById("myModal") as HTMLElement).style.display ="block";
  }
  closeModal(){
    // myModal
    (document.getElementById("myModal") as HTMLElement).style.display ="none";
    // alert("closse");
  }
  getOrders() {
    this.orderService.getCompletedOrdersForUser().subscribe(
      (orders: IOrder[]) => {
        this.orders = orders;
        console.log(this.orders);

         let objectURL = 'orders:picturUrl/png;base64,' + orders;
       this.picturUrl=this.sanitizer.bypassSecurityTrustUrl(objectURL);

      },

      (err) => {
        console.log(err);
      }
    );



}
}

