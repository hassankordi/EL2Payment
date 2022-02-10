import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/shared/models/product';
import { environment } from 'src/environments/environment';




import { ShopService } from '../shop.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {
product:any=[];
  constructor(private shopService: ShopService, private router: Router,private http:HttpClient) { }
  productform: FormGroup;
  ngOnInit(): void {
    this.refreshList();
  }

refreshList(){
  this.http.get<any>(environment.baseUrl+'Products').subscribe(data=>{
    this.product=data;
  });
}

  saveChanges(product: IProduct){
    this.shopService.postProduct(product).subscribe(()=>{


      this.router.navigate(['/Shop']);
    },error=> console.error(error));

}
}
