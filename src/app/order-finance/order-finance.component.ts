import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { OrdersService } from '../orders/orders.service';
import { IFinance, IOrder } from '../shared/models/order';

@Component({
  selector: 'app-order-finance',
  templateUrl: './order-finance.component.html',
  styleUrls: ['./order-finance.component.scss']
})
export class OrderFinanceComponent implements OnInit {

  selectedImage: any = null;

  buyerEmail: "string";
  orderDate: "asfasfsaf";
  deliveryMethod: "string";
  shippingPrice: 0;
  subTotal: 0;
  total: 0;
  status: "string";
  photofileName="anonymous.png";
  onUpload(event: any) {
    this.selectedImage = <File>event.target.files[0]
    console.log(this.selectedImage);
    this.orderService.sendImage(this.selectedImage).subscribe((res)=>{console.log(res);
    } , (err)=>{console.log(err);
    })
   
  }

  orders:any ; 
  finance:IFinance[];
  photoPath= environment.baseUrl+'/Financ/SaveFile';
  constructor(private orderService: OrdersService) { 
    this.orders = [
      {
        id: 1,
        buyerEmail: "string",
        orderDate: "asfasfsaf",
        shipToAddress: [],
        deliveryMethod: "string",
        shippingPrice: 0,
        orderItems: [],
        subTotal: 0,
        total: 0,
        status: "string",
        orders: [],
      }
    ]
  } 

 
  
  closeModal(){
    // myModal
    (document.getElementById("myModal") as HTMLElement).style.display ="none";
    // alert("closse");
  }
 
  openModal(){
    // alert("open");

    (document.getElementById("myModal") as HTMLElement).style.display ="block";
  }
  ngOnInit(): void {
    this.getAllOrders();
  } 

  editClick(fin:any){
    
  
  }
  getAllOrders() {
    this.orderService.getAllOrdersForUser().subscribe(
      (orders: IFinance[]) => {
        this.orders = orders;
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
