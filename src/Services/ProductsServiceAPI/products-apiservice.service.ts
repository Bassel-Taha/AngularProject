import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IProduct} from "../../Model/i-product";
import {Observable, retry} from "rxjs";
import {ICategories} from "../../Model/ICategories";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductsAPIServiceService {

  constructor(private _httpClient : HttpClient) {

  }
  GetAllCategories(): Observable<ICategories[]>
  {
    return this._httpClient.get<IProduct[]>(`${environment.APIURL}Categories`)
  }


  GetAllProducts(): Observable<IProduct[]>
  {
    return this._httpClient.get<IProduct[]>(`${environment.APIURL}Products`)
  }

  GetProductsByCategoryID(catID: number | string) : Observable<IProduct[]>
  {
    if (catID ==  "All Categories" )
      return this.GetAllProducts()
    else {
      return this._httpClient.get<IProduct[]>(`${environment.APIURL}Products?CategoryID=${catID}`)
    }
  }

  GetProductByProductId(productId :number):Observable<IProduct[]>
  {
    return this._httpClient.get<IProduct[]>(`${environment.APIURL}Products/${productId}`)
  }

  ListOfSelectedProductsWithTheQuantities(allProductsFromTheProductComponent: IProduct[]): IProduct[] {
    let selectedProducts: IProduct[] = [] as IProduct[]
    for (let product of allProductsFromTheProductComponent) {

      if (product.selectedQuantitiesToBuy! > 0 && product != null) {
        selectedProducts.push(product)
      }
    }
    return selectedProducts;
  }
}