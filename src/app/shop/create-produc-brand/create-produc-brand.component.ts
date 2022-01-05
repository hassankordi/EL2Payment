import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-create-produc-brand',
  templateUrl: './create-produc-brand.component.html',
  styleUrls: ['./create-produc-brand.component.scss']
})
export class CreateProducBrandComponent implements OnInit {

  constructor(private http:HttpClient,) { }
prodctBrand:any=[]; 
modalTitle="";
Id=0; 
Name="";



  ngOnInit(): void { 
    this.refreshList();
  }
  refreshList(){
    this.http.get<any>(environment.baseUrl+'Products/brands').subscribe(data=>{
      this.prodctBrand=data;
    });
}
addClick(){
  this.modalTitle="Add Type"; 
  this.Id=0; 
  this.Name=""; 
} 
editClick(typ:any ){
  this.modalTitle="Edit Type"; 
  this.Id=typ.Id; 
  this.Name=typ.Name; 
}
createClick(){
  var val={
  prodprodctBrandctType:this.prodctBrand
  }; 
  this.http.post(environment.baseUrl+'Products/CreateProductBrand',val) 
  .subscribe(res=>{
    alert(res.toString());
    this.refreshList();
  });
}

// updateClick(){
//   var val={
//   Name:this.Name,
//   Id:this.Id
//   }; 
//   this.http.put(environment.baseUrl+'Products/CreateProductType',val) 
//   .subscribe(res=>{
//     alert(res.toString());
//     this.refreshList();
//   });
// }



}
