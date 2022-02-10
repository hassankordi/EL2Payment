import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';





import { OrdersService } from '../orders/orders.service';
import { IFinance, IOrder } from '../shared/models/order';

@Component({
  selector: 'app-order-finance',
  templateUrl: './order-finance.component.html',
  styleUrls: ['./order-finance.component.scss']
})
export class OrderFinanceComponent implements OnInit {
  closeDialog = true ;
  imageId :any = 0
  selectedImage: any = null;
  PictureUrl:"string";
  buyerEmail: "buyerEmail";
  orderDate: "";
  deliveryMethod: "string";
  shippingPrice: 0
  subTotal: 0;

  total: 0;
  status: "string";
  photofileName="anonymous.png";
  onUpload(event: any) {

    this.selectedImage = <File>event.target.files[0]
    console.log(this.selectedImage);

  }

  orders:any ;
  finance:IFinance[];
  photoPath= environment.baseUrl+'/Financ/SaveFile';
  constructor(private orderService: OrdersService, private http:HttpClient ,private router:Router) {
    this.orders = [
      // {
      //   id: 1,
      //   buyerEmail: "string",
      //   orderDate: "date",
      //   shipToAddress: [],
      //   deliveryMethod: "string",
      //   PictureUrl:"",
      //   shippingPrice: 0,
      //   orderItems: [],
      //   subTotal: 0,
      //   total: 0,
      //   status: "string",
      //   orders: [],
      // }
    ]
  }



  closeModal(){
    // myModal
    (document.getElementById("myModal") as HTMLElement).style.display ="none";
    // alert("closse");
  }

  openModal(id){
    this.imageId = id
    console.log(id);

    // alert(id);

    (document.getElementById("myModal") as HTMLElement).style.display ="block";
  }
  ngOnInit(): void {
    this.getAllOrders();
  }


  getAllOrders() {
    this.orderService.getAllOrdesFinance().subscribe(
      (orders:IOrder) => {
        this.orders = orders;
        console.log(orders[0]);

      },
      (err) => {
        console.log(err);
      }
    );
  }
  // onUplaod(event:any){
  //   let file = <File>event.target.files[0]
  //   console.log(file);

  // }
  createClick(event:any){

    this.orderService.createImage(this.selectedImage , this.imageId).subscribe((res)=>{console.log(res);
      this.closeDialog = false ;



       this.closeModal()
       window.location.reload();
    } , (err)=>{console.log(err);
      this.closeModal()
      window.location.reload();

    })

    this.orderService.pendingComplete(this.imageId).subscribe((res)=>{console.log(res);
    } , (err)=>{console.log(err);
    })


    // this.orderService.createImage(event).subscribe(res=>{
    //   alert(res.toString());

    // });
   }
}


