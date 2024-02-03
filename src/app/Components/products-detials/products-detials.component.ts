import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductServiceService} from "../../../Services/product-service.service";
import {JsonPipe, Location} from "@angular/common";
import {IProduct} from "../../../Model/i-product";

@Component({
  selector: 'app-products-detials',
  standalone: true,
  imports: [
    JsonPipe
  ],
  templateUrl: './products-detials.component.html',
  styleUrl: './products-detials.component.scss'
})
export class ProductsDetialsComponent implements OnInit{
   productId? : number;
   selectedProduct? : IProduct
  constructor(private _activatedRoutService : ActivatedRoute , private _productsService : ProductServiceService , private _locationservice : Location) {
  }

    ngOnInit(): void {
      this.productId = Number (this._activatedRoutService.snapshot.paramMap.get('ProductId'));
      this.selectedProduct = this._productsService.GetProductByProductId(this.productId)
      console.log(this.productId)
    }

}
