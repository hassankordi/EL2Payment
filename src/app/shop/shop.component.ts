import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ShopService } from './shop.service';
import { IProduct } from '../shared/models/product';
import { IBrand } from '../shared/models/brand';
import { IType } from '../shared/models/productType';
import { ShopParams } from '../shared/models/shopParams';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  @ViewChild('search', { static: false }) searchTerm: ElementRef;
  products: IProduct[];
  brands: IBrand[];
  types:any=[];

  shopParams = new ShopParams();
  totalCount: number;
  sortOptions = [
    { name: 'Alphabetical', value: 'name' },
    { name: 'Price: Low to High', value: 'priceAsc' },
    { name: 'Price: High to Low', value: 'priceDesc' },
  ];

  constructor(private shopService: ShopService,private router: Router , private fb  :FormBuilder) {}

  // id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  availableQuantity: number;
  limit: number;
  pictureUrl: '';
  productType: string;
  productBrand: string;
  selectedImage:any = null;
  closeDialog = true ;
  deleverybrtand : FormGroup

  productData = new FormGroup({
    // id : new FormControl("" ,[Validators.required]) ,
    name : new FormControl("" ,[Validators.required]) ,
    description : new FormControl("" ,[Validators.required]) ,
    supplier:new FormControl("",[Validators.required]),
     price : new FormControl("" ,[Validators.required]) ,
    //rating : new FormControl("" ,[Validators.required]) ,
    availableQuantity : new FormControl("" ,[Validators.required]) ,
    limit : new FormControl("" ,[Validators.required]) ,
    // pictureUrl : new FormControl("" ,[Validators.required]) ,
    productType : new FormControl("") , // hena obj
    productBrand : new FormControl("" ) ,  // hena obj
  })
  brandData=new FormGroup({
    name : new FormControl("" ,[Validators.required])
  })


  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getTypes();
    this.deleverybrtand = this.fb.group({
      shortName : '' ,
      price  : ''
    })
    
  }

  onAdd(){
console.log(this.productData.value);


  } 
  opendeleverymethod(){
    (document.getElementById("delevery") as HTMLElement).style.display ="block";
  } 
  closedeleverymethod(){
    (document.getElementById("delevery") as HTMLElement).style.display ="none";
  }

  closeModal(){
    (document.getElementById("myModal") as HTMLElement).style.display ="none";
  }

  openModal(){
    (document.getElementById("myModal") as HTMLElement).style.display ="block";
  }
  openModalBrand(){
    (document.getElementById("mybrand") as HTMLElement).style.display ="block";
  }
  closeModalBrand(){
    (document.getElementById("mybrand") as HTMLElement).style.display ="none";
  }
  openModaltype(){
    (document.getElementById("myType") as HTMLElement).style.display ="block";
  }
  closeModaltype(){
    (document.getElementById("myType") as HTMLElement).style.display ="none";
  }

  onUpload(event: any) {
    this.selectedImage = <File>event.target.files[0]
    console.log(this.selectedImage);
  }
  getProducts() {
    this.shopService.getProducts(this.shopParams).subscribe(
      (res) => {
        this.products = res.data;
        this.shopParams.pageSize = res.pageSize;
        this.shopParams.pageNumber = res.pageIndex;
        this.totalCount = res.count;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  addProducts(product){
    // console.log(typeof(product));
    console.log(this.productData.value);
    const test = {
      "name": this.productData.value.name,
      "description": this.productData.value.description,
      "supplier":this.productData.value.supplier,
      "price": this.productData.value.price,
      "rating": 0,
      "availableQuantity": this.productData.value.availableQuantity,
      "limit": this.productData.value.limit,
      "pictureUrl": "string",
      "productType": {
        "name": this.productData.value.productType.name,
        "id": 0
      },
      "productTypeId": 0,
      "productBrand": {
        "name":  this.productData.value.productBrand.name,
        "id": 0
      },
      "productBrandId": 0,
      "id": 0
    }


     this.shopService.postProduct(test).subscribe(res=>{
      this.closeDialog = false ;
       console.log(res)
       this.getProducts();
       window.location.reload();

     })


  }
  addBrad(brand){
    console.log(brand);
    let myBrabd = {
      name:brand ,
      id:0
    }

    this.shopService.postbrand(myBrabd).subscribe(()=>{
      this.closeDialog = false ;
      this.getProducts();
     window.location.reload();
    },err=>console.error(err));


  } 
  adddelevery(delevery){
   
    let mydelevery = {
      shortName:delevery.shortName ,
      deliveryTime:'' ,
      description:'' ,
      price:delevery.price ,
      id:0
    }
    console.log(mydelevery);

    this.shopService.postdelevery(mydelevery).subscribe(()=>{
      this.closeDialog = false ;
      this.adddelevery(delevery);
     window.location.reload();
    },err=>console.error(err));


  }
  addType(type:IType){
    console.log(type);
    let myType = {
      name:type ,
      id:0

    }


    this.shopService.postType(myType).subscribe(()=>{
      this.closeDialog = false ;
     window.location.reload();
      this.getProducts();
      this.router.navigate(['/shop'])
    },err=>console.error(err));

  }
  // setProducts(data) {
  //   this.shopService.addProduct(data).subscribe(
  //     (res) => {

  //       console.warn(res)
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }
  getBrands() {
    this.shopService.getBrands().subscribe(
      (res) => {
        this.brands = [{ id: 0, name: 'All' }, ...res];
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getTypes() {
    this.shopService.getTypes().subscribe(
      (res) => {
        this.types = [{ id: 0, name: 'All' }, ...res];
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onBrandSelected(brandId: number) {
    this.shopParams.brandId = brandId;
    this.shopParams.pageNumber = 1;
    this.getProducts();
  
  }
  onTypeSelected(typeId: number) {
    this.shopParams.typeId = typeId;
    this.shopParams.pageNumber = 1;
    this.getProducts();
  }
  onSortSelected(sort: string) {
    this.shopParams.sort = sort;
    this.shopParams.pageNumber = 1;
    this.getProducts();
  }
  onPageChanged(event: any) {
    if (this.shopParams.pageNumber !== event) {
      this.shopParams.pageNumber = event;
      this.getProducts();
    }
  }
  onSearch() {
    this.shopParams.search = this.searchTerm.nativeElement.value;
    this.shopParams.pageNumber = 1;
    this.getProducts();
  }
  onReset() {
    this.searchTerm.nativeElement.value = '';
    this.shopParams = new ShopParams();
    this.shopParams.pageNumber = 1;
    this.getProducts();
  }
}
