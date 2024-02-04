import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {ProductServiceService} from "../../../Services/product-service.service";
import {CurrencyPipe, JsonPipe, Location} from "@angular/common";
import {IProduct} from "../../../Model/i-product";
import {FormsModule} from "@angular/forms";
import {ICategories} from "../../../Model/ICategories";

@Component({
  selector: 'app-products-detials',
  standalone: true,
  imports: [
    JsonPipe,
    CurrencyPipe,
    FormsModule,
    RouterLink
  ],
  templateUrl: './products-detials.component.html',
  styleUrl: './products-detials.component.scss'
})
export class ProductsDetialsComponent implements OnInit{
   productId? : number;
   selectedProduct? : IProduct
  productCategory? : ICategories
  constructor(private _activatedRoutService : ActivatedRoute , private _productsService : ProductServiceService , public _locationservice : Location) {
  }

    ngOnInit(): void {
    /* //when using snapshot in the ActivatedRout services if I want to navigate to the same component the angular won't run the OnInit and the page won't reload
      this.productId = Number (this._activatedRoutService.snapshot.paramMap.get('ProductId'));
      this.selectedProduct = this._productsService.GetProductByProductId(this.productId!)
      this.productCategory =  this._productsService.GetAllCategories().find(i=>i.ID == this.selectedProduct?.CategoryID)*/

      //todo "if there is a function or an event that change the rout url and i need to get data from it to reload the same component over and over cuz angular wont run the OnInit if i changed to the rout to the component"
      //
      // to get the page to reload with every change in the rout we mast use the paramMap directly and subscribe to it and get the data from it
      //todo "and the rest of the functions must be put in the parentheses of the ParamMap"
      this._activatedRoutService.paramMap.subscribe(paramMap => {
        this.productId= Number(paramMap.get("ProductId"));
        this.selectedProduct = this._productsService.GetProductByProductId(this.productId!);
        this.productCategory =  this._productsService.GetAllCategories().find(i=>i.ID == this.selectedProduct?.CategoryID);
        console.log(this.productId)
      })

    }

}
