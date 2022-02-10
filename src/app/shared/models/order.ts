import { Interface } from "readline";
import { environment } from "src/environments/environment";
import { IAddress } from "./address";

export interface IOrderToCreate {
  basketId: string;
  deliveryMethodId: number;
  shipToAddress: IAddress;
}

export interface IOrderItem {
  productId: number;
  productName: string;
  pictureUrl: string;
  price: number;
  quantity: number; 
  description:string; 
  supplier:string;
  itemOrdered:itemOrdered[]
  
}
export interface itemOrdered {
 
  description:string; 
  supplier:string;
  
  
}

export interface IOrder {
  id: number;
  buyerEmail: string;
  orderDate: Date;
 // description: string;
  shipToAddress: IAddress;
  deliveryMethod: string;
  shippingPrice: number;
  orderItems: IOrderItem[];
  subTotal: number;
  total: number;
  status: string;
  pictureUrl: string;
  //ItemOrdered_Supplier: string;
}
export interface IFinance {
  id: number;
  // buyerEmail: string;
  orderDate: Date;
  //shipToAddress: IAddress;
  // deliveryMethod: string;
  //shippingPrice: number;
  //photoFileName:string;
  productName: string;
  quantity: number;
  price: number;
 

  orderItems: IOrderItem[];
  // subTotal: number;
  // total: number;
  // status: string;
}
export interface Inventory {
  supplier: string;
  OrderName: string;
  TotalQuantity: number;
  TimeStamp: Date;  
  pictureUrl:string;
  //this.PhotoFilePath=this.service.PhotoUrl+this.PhotoFileName;
}
