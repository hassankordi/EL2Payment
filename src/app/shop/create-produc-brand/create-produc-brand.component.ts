import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';






@Component({
  selector: 'app-create-produc-brand',
  templateUrl: './create-produc-brand.component.html',
  styleUrls: ['./create-produc-brand.component.scss']
})
export class CreateProducBrandComponent implements OnInit {
  shopService: any;

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
openModal(){
  (document.getElementById("exampleModel") as HTMLElement).style.display ="block";
}
closeModal(){
  (document.getElementById("exampleModel") as HTMLElement).style.display ="none";
}

setProducts(data) {
  this.shopService.addBrand(data).subscribe(
    (res) => {

      console.warn(res)
    },
    (error) => {
      console.log(error);
    }
  );


}
}
