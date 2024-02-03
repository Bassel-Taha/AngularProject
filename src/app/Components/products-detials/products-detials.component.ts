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
      this.productId = Number (this._activatedRoutService.snapshot.paramMap.get('ProductId'));
      this.selectedProduct = this._productsService.GetProductByProductId(this.productId)
      this.productCategory =  this._productsService.GetAllCategories().find(i=>i.ID == this.selectedProduct?.CategoryID)
    }

}
