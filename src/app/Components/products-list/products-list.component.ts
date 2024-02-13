import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {IProduct} from "../../../Model/i-product";
import {CurrencyPipe, NgForOf, NgOptimizedImage} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ICategories} from "../../../Model/ICategories";
import {LightHouseDirective} from "../../Direectives/light-house.directive";
import {Router, RouterLink} from "@angular/router";
import {routes} from "../../app.routes";
import {ProductsAPIServiceService} from "../../../Services/ProductsServiceAPI/products-apiservice.service";
import {MatSnackBar} from "@angular/material/snack-bar";

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


export class ProductsListComponent implements OnChanges, OnInit {
  ProductsListByCategory: IProduct[] = [];
  @Input() SentCategoryID: number | string = "All Categories";
  @Input() selectedProductsQuantities!: IProduct[]
  @Output() TotalPriceEvent: EventEmitter<any>;
  @Output() ProductsQuantitiesEvent: EventEmitter<any>;


  constructor(private ProductService: ProductsAPIServiceService, private router: Router, private snackbar :MatSnackBar) {
    // initialize the total price event to be an eventemitter
    this.TotalPriceEvent = new EventEmitter<any>();
    // initialize the productsquantities  event to be an eventemitter
    this.ProductsQuantitiesEvent = new EventEmitter<any>();
  }

  ngOnInit(): void {
    this.ProductService.GetProductsByCategoryID(this.SentCategoryID).subscribe(x => this.ProductsListByCategory = x);
    this.selectedProductsQuantities = this.ProductService.ListOfSelectedProductsWithTheQuantities(this.ProductsListByCategory)
  }

  /*can also create the routing by using the router service from angular */
  RoutingToProductDetails(productID: number) {
    //this will method will direct the user when called to the written rout
    //it uses an array the in each element is part of the rout
    // the following is ...../Products/productID
    this.router.navigate(['/Products', productID])
  }

  ngOnChanges(): void {
    this.ProductService.GetProductsByCategoryID(this.SentCategoryID).subscribe(XPathExpression => this.ProductsListByCategory = XPathExpression)
    this.selectedProductsQuantities = this.ProductService.ListOfSelectedProductsWithTheQuantities(this.ProductsListByCategory)
    this.BuyButtonClick()
  }


  BuyButtonClick() {
    // sending the productList with the total prices of each selected product quantities to get the total price of each product to get full total price
    this.TotalPriceEvent.emit(this.ProductsListByCategory);
    //using this listing method to filter the 0 quantities from the sent-list
    this.selectedProductsQuantities = this.ProductService.ListOfSelectedProductsWithTheQuantities(this.ProductsListByCategory)
    //sending the selected products quantities to buy
    this.ProductsQuantitiesEvent.emit(this.selectedProductsQuantities)
  }


  AddNewProduct() {
    this.ProductService.AddNewProduct({
      CategoryID: 4,
      ImgUrl: "dm;slma",
      Name: "new product",
      Price: 0,
      RemainingQuantity: 2,
      brand: "new brand",
      selectedQuantitiesToBuy: 0,
      totalPriceOfSelectedQuatities: 0,
      id: 5000
    }).subscribe({
      next: x => {this.snackbar.open("New Product Added", "exit", {duration: 5000 , horizontalPosition : "right" , verticalPosition : "top"})},
      error: error => {this.snackbar.open("Error adding the new product", "exit", {duration: 5000 , horizontalPosition : "right" , verticalPosition : "top"})},
      complete: () => {console.log("subscriber completed complete")}})


      /*.subscribe( x => {this.snackbar.open("New Product Added", "exit", {duration: 2000 , horizontalPosition : "left" , verticalPosition : "bottom"})},
        error => {this.snackbar.open("New Product Added", "exit", {duration: 2000 , horizontalPosition : "left" , verticalPosition : "bottom"})},
        () => {
          console.log("subscriber completed complete")}
      )*/

    this.router.navigate(['/Products'])
  }

}

