import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ShopService } from './shop.service';
import { IProduct } from '../shared/models/product';
import { IBrand } from '../shared/models/brand';
import { IType } from '../shared/models/productType';
import { ShopParams } from '../shared/models/shopParams';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  @ViewChild('search', { static: false }) searchTerm: ElementRef;
  products: IProduct[];
  brands: IBrand[];
  types: IType[];
  shopParams = new ShopParams();
  totalCount: number;
  sortOptions = [
    { name: 'Alphabetical', value: 'name' },
    { name: 'Price: Low to High', value: 'priceAsc' },
    { name: 'Price: High to Low', value: 'priceDesc' },
  ];

  constructor(private shopService: ShopService) {}

  // id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  availableQuantity: number;
  limit: number;
  pictureUrl: string;
  productType: string;
  productBrand: string;
  selectedImage:any = null;


  productData = new FormGroup({
    // id : new FormControl("" ,[Validators.required]) , 
    name : new FormControl("" ,[Validators.required]) , 
    description : new FormControl("" ,[Validators.required]) , 
    price : new FormControl("" ,[Validators.required]) , 
    rating : new FormControl("" ,[Validators.required]) , 
    availableQuantity : new FormControl("" ,[Validators.required]) , 
    limit : new FormControl("" ,[Validators.required]) , 
    // pictureUrl : new FormControl("" ,[Validators.required]) , 
    productType : new FormControl("" ,[Validators.required]) , 
    productBrand : new FormControl("" ,[Validators.required]) , 
  })

 
  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getTypes();
  }

  onAdd(){
console.log(this.productData.value);


  }
  
  closeModal(){
    (document.getElementById("myModal") as HTMLElement).style.display ="none";
  }
 
  openModal(){
    (document.getElementById("myModal") as HTMLElement).style.display ="block";
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
