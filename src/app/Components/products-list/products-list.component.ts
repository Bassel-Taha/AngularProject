import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {IProduct} from "../../../Model/i-product";
import {CurrencyPipe, NgForOf, NgOptimizedImage} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ICategories} from "../../../Model/ICategories";
import {LightHouseDirective} from "../../Direectives/light-house.directive";
import {ProductServiceService} from "../../../Services/product-service.service";

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
    CurrencyPipe,
    LightHouseDirective,
    NgOptimizedImage
  ],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})


export class ProductsListComponent implements OnChanges{
  ProductsListByCategory: IProduct[] = [];
  @Input() SentCategoryID: number | string = "Select Category" ;
  @Input() selectedProductsQuantities!: IProduct[]
  @Output()  TotalPriceEvent : EventEmitter<any> ;
  @Output()  ProductsQuantitiesEvent : EventEmitter<any> ;


  constructor(private ProductService : ProductServiceService) {
    // initialize the total price event to be an eventemitter
    this.TotalPriceEvent = new EventEmitter<any>();
    // initialize the productsquantities  event to be an eventemitter
    this.ProductsQuantitiesEvent = new EventEmitter<any>();
  }

  ngOnChanges(): void {
      this.ProductsListByCategory =  this.ProductService.GetProductsByCategoryID(this.SentCategoryID)
      this.selectedProductsQuantities = this.ListOfSelectedProductsWithTheQuantities(this.ProductsListByCategory)
      this.BuyButtonClick()
    }



  BuyButtonClick()
  {
    // sending the productList with the total prices of each selected product quantities to get the total price of each product to get full total price
    this.TotalPriceEvent.emit(this.ProductsListByCategory);
    //using this listing method to filter the 0 quantities from the sent-list
    this.selectedProductsQuantities = this.ListOfSelectedProductsWithTheQuantities(this.ProductsListByCategory)
    //sending the selected products quantities to buy
    this.ProductsQuantitiesEvent.emit(this.selectedProductsQuantities)

    //for checking the code
    /*console.log(this.selectedProductsQuantities)*/

  }


  ListOfSelectedProductsWithTheQuantities(allProductsFromTheProductComponent: IProduct[]): IProduct[] {
    let selectedProducts: IProduct[] = [] as IProduct[]
    for (let product of allProductsFromTheProductComponent) {

      if (product.selectedQuantitiesToBuy! > 0 && product != null) {
        selectedProducts.push(product)
      }
    }
    //for testing the code
    /*console.log(selectedProducts)*/
    return selectedProducts;
  }
}

