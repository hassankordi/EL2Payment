import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IPagination } from '../shared/models/pagination';
import { IBrand } from '../shared/models/brand';
import { IType } from '../shared/models/productType';
import { map } from 'rxjs/operators';
import { ShopParams } from '../shared/models/shopParams';
import { IProduct } from '../shared/models/product';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';






@Injectable({
  providedIn: 'root',
})
export class ShopService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  addProduct(data): Observable<any> {
    const product = {
      // id: Number(data.id),
      name: data.name,
      description: data.description,
      price: Number(data.price),
      rating: Number(data.rating),
      availableQuantity: data.availableQuantity,
      limit: Number(data.limit),
     // pictureUrl: data.pictureUrl,
      productType: data.productType,
      productBrand: data.productBrand,

    }
    return this.http.post(this.baseUrl + 'products/CreateProduct', product)
  }

  // addBrand(data): Observable<any> {
  //   const brand = {
  //     // id: Number(data.id),
  //     name: data.name,


  //   }
  //   return this.http.post(this.baseUrl + 'products/brands', brand)
  // }

  getProducts(shopParams: ShopParams) {
    let params = new HttpParams();
    if (shopParams.brandId !== 0) {
      params = params.append('brandId', shopParams.brandId.toString());
    }
    if (shopParams.typeId !== 0) {
      params = params.append('typeId', shopParams.typeId.toString());
    }
    params = params.append('sort', shopParams.sort);
    params = params.append('pageIndex', shopParams.pageNumber.toString());
    params = params.append('pageSize', shopParams.pageSize.toString());
    if (shopParams.search) {
      params = params.append('search', shopParams.search);
    }

    return this.http
      .get<IPagination>(this.baseUrl + 'products', {
        observe: 'response',
        params,
      })
      .pipe(
        map((response) => {
          return response.body;
        })
      );
  }
  getBrands() {
    return this.http.get<IBrand[]>(this.baseUrl + 'products/brands');
  }
  getTypes() {
    return this.http.get<IType[]>(this.baseUrl + 'products/types');
  }
  getProduct(id: number) {
    return this.http.get<IProduct>(this.baseUrl + 'products/' + id);
  }
  postProduct(product) {
    return this.http.post(this.baseUrl+'Products/CreateProduct',product);
  }
  postbrand(brand){
    return this.http.post(this.baseUrl+'Products/CreateProductBrand',brand);
  }
  postType(type){
    return this.http.post(this.baseUrl+'Products/CreateProductType',type);
  }

  postdelevery(delevery){
    return this.http.post(this.baseUrl+'Orders/DeliveryMethod',delevery);
  }
  // create(genre: genreCreationDto){
  //   return this.http.post(this.apiurl, genre);
  // }
}
