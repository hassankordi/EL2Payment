import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IOrder } from '../shared/models/order';
import { environment } from 'src/environments/environment';




@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getOrdersForUser() {
    return this.http.get(this.baseUrl + 'orders');
  }
  getCompletedOrdersForUser() {
    return this.http.get(this.baseUrl + 'Orders/GetCompletOrdersForUser');
  }
  editOrder(id:number ,Status:IOrder){
    return this.http.put(this.baseUrl +'Orders/Edit/?id',Status);

  }
  getOrderDetailed(id: number) {
    return this.http.get(this.baseUrl + 'orders/' + id);
  }
  getAllOrders() {
    return this.http.get(this.baseUrl + 'orders/GetAllOrders');
  }
  getAllOrdesFinance  () {
    return this.http.get(this.baseUrl + 'orders/GetAllfinance');
  }
  // sendImage(file:any):Observable<any>{
  //   console.log(file);

  //   let obj = new FormData();
  //   obj.append("file" , file)
  //   console.log(obj.get("file"));

  //   return this.http.post("http://192.168.1.51/EL2/api/Financ/SaveFile" , obj)
  // }
  pendingComplete(id){
    // this.router.navigate(['/shop'])
    return this.http.put<any>(this.baseUrl+`Orders/Edit?id=${id}&orderStauts=${3}`,{})

 }

  pass(id, orderStauts){
   // this.router.navigate(['/shop'])
   console.log();

   return this.http.put<any>(this.baseUrl+`Orders/Edit?id=${id}&orderStauts=${orderStauts}`,{})

}

 createImage( pictureUrl , id){
   const form = new FormData()
   form.append("file" ,pictureUrl )
   form.append("id" ,id )
   return this.http.put(this.baseUrl +'Orders/SaveFiles',form)
 }
 getInventory(){
    return this.http.get(this.baseUrl+'Inventory');
  }
}


