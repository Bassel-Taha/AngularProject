import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {IProduct} from "../../../Model/i-product";
import {CurrencyPipe, NgForOf, NgOptimizedImage} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ICategories} from "../../../Model/ICategories";
import {LightHouseDirective} from "../../Direectives/light-house.directive";
import {ProductServiceService} from "../../../Services/product-service.service";
import {Router, RouterLink} from "@angular/router";
import {routes} from "../../app.routes";

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
    CurrencyPipe,
    LightHouseDirective,
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})


export class ProductsListComponent implements OnChanges, OnInit{
  ProductsListByCategory: IProduct[] = [];
  @Input() SentCategoryID: number | string = "All Categories" ;
  @Input() selectedProductsQuantities!: IProduct[]
  @Output()  TotalPriceEvent : EventEmitter<any> ;
  @Output()  ProductsQuantitiesEvent : EventEmitter<any> ;


  constructor(private ProductService : ProductServiceService , private router : Router) {
    // initialize the total price event to be an eventemitter
    this.TotalPriceEvent = new EventEmitter<any>();
    // initialize the productsquantities  event to be an eventemitter
    this.ProductsQuantitiesEvent = new EventEmitter<any>();
  }

  ngOnInit(): void {
    this.ProductsListByCategory =  this.ProductService.GetProductsByCategoryID(this.SentCategoryID)
    this.selectedProductsQuantities = this.ProductService.ListOfSelectedProductsWithTheQuantities(this.ProductsListByCategory)
    }

    /*can also create the routing by using the router service from angular */
  RoutingToProductDetails(productID : number)
  {
    //this will method will direct the user when called to the written rout
    //it uses an array the in each element is part of the rout
    // the following is ...../Products/productID
    this.router.navigate(['/Products' , productID])
  }

  ngOnChanges(): void {
      this.ProductsListByCategory =  this.ProductService.GetProductsByCategoryID(this.SentCategoryID)
      this.selectedProductsQuantities = this.ProductService.ListOfSelectedProductsWithTheQuantities(this.ProductsListByCategory)
      this.BuyButtonClick()
    }



  BuyButtonClick()
  {
    // sending the productList with the total prices of each selected product quantities to get the total price of each product to get full total price
    this.TotalPriceEvent.emit(this.ProductsListByCategory);
    //using this listing method to filter the 0 quantities from the sent-list
    this.selectedProductsQuantities = this.ProductService.ListOfSelectedProductsWithTheQuantities(this.ProductsListByCategory)
    //sending the selected products quantities to buy
    this.ProductsQuantitiesEvent.emit(this.selectedProductsQuantities)
  }


}

