import {Injectable, NgModule} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {IProduct} from "../../Model/i-product";
import {catchError, Observable, retry, throwError} from "rxjs";
import {ICategories} from "../../Model/ICategories";
import {environment} from "../../environments/environment.development";
import {TagContentType} from "@angular/compiler";
import {InlineFontsProcessor} from "@angular-devkit/build-angular/src/utils/index-file/inline-fonts";

@Injectable({
  providedIn: 'root'
})
export class ProductsAPIServiceService {

  private APIURL = 'http://localhost:3000/'
  private httpOptions

  constructor(private _httpClient: HttpClient) {
    this.httpOptions = {

      headers: new HttpHeaders({
        'Content-Type': 'application.json',
        //Authorization: ''
      })
    }
  }

  GetAllCategories(): Observable<ICategories[]> {
    return this._httpClient.get<ICategories[]>(`${this.APIURL}Categories`)
  }


  GetAllProducts(): Observable<IProduct[]> {
    return this._httpClient.get<IProduct[]>(`${this.APIURL}Products`)
  }

  GetProductsByCategoryID(catID: number | string): Observable<IProduct[]> {
    if (catID == "All Categories")
      return this.GetAllProducts()
    else {
      return this._httpClient.get<IProduct[]>(`${this.APIURL}Products?CategoryID=${catID}`)
    }
  }

  GetProductByProductId(productId: number): Observable<IProduct> {
    return this._httpClient.get<IProduct>(`${this.APIURL}Products/${productId}`)
  }

  AddNewProduct(newProd: IProduct) : Observable<IProduct> {
    console.log(newProd)

    /*return this._httpClient.post<IProduct> (`${environment.API_URL}Products`, JSON.stringify(newProd), {
      headers : new HttpHeaders({
        'Content-Type':'application.json',
        //Authorization: ''
      })
    }).pipe(retry(2))*/

    return this._httpClient.post<IProduct>(`${environment.API_URL}Products`, JSON.stringify(newProd), this.httpOptions).pipe(retry(2), catchError((handleError: HttpErrorResponse) => {
      return throwError(() => {
        console.log(handleError.message)
      })
    }))
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
