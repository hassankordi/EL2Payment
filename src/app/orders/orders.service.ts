import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getOrdersForUser() {
    return this.http.get(this.baseUrl + 'orders');
  }
  getOrderDetailed(id: number) {
    return this.http.get(this.baseUrl + 'orders/' + id);
  }  
  getAllOrdersForUser() {
    return this.http.get(this.baseUrl + 'orders/GetAllOrder');
  } 
  sendImage(file:any):Observable<any>{
    console.log(file);
    
    let obj = new FormData();
    obj.append("file" , file)
    console.log(obj.get("file"));
    
    return this.http.post("http://192.168.1.51/EL2/api/Financ/SaveFile" , obj)
  }
  

}
