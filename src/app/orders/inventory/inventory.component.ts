import { Component, OnInit } from '@angular/core';
import { Inventory } from 'src/app/shared/models/order';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {


  constructor(private orderservice:OrdersService) { }
  inventorys: any;
  ngOnInit(): void {
    this.getInventoryItem()
  }

  getInventoryItem() {
    this.orderservice.getInventory().subscribe(
     (res)=>{
     console.log(res)
     this.inventorys = res
      },
      (err) => {
        console.log(err);
      }
    );
    }
}
