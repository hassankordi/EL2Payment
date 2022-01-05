import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment'; 


@Component({
  selector: 'app-create-produc-type',
  templateUrl: './create-produc-type.component.html',
  styleUrls: ['./create-produc-type.component.scss']
})
export class CreateProducTypeComponent implements OnInit {


  constructor(private http:HttpClient,) { }
prodctType:any=[]; 
modalTitle="";
Id=0; 
Name="";
onChange(event) {}


  ngOnInit(): void { 
    this.refreshList();
  }
  refreshList(){
    this.http.get<any>(environment.baseUrl+'Products/types').subscribe(data=>{
      this.prodctType=data;
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
  prodctType:this.prodctType
  }; 
  this.http.post(environment.baseUrl+'Products/CreateProductType',val) 
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
closeModal(){
  // myModal
  (document.getElementById("myModal") as HTMLElement).style.display ="none";
  // alert("closse");
}

openModal(){
  // alert("open");

  (document.getElementById("myModal") as HTMLElement).style.display ="block";
}


}
