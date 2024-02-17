import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {IProduct} from "../../../Model/i-product";
import {JsonPipe, NgClass} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ProductsAPIServiceService} from "../../../Services/ProductsServiceAPI/products-apiservice.service";
import {ICategories} from "../../../Model/ICategories";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-adding-product',
  standalone: true,
  imports: [
    JsonPipe,
    FormsModule,
    NgClass
  ],
  templateUrl: './adding-product.component.html',
  styleUrl: './adding-product.component.scss'
})
export class AddingProductComponent implements OnInit {

  newPrd: IProduct = {} as IProduct;
  catList: ICategories[] = [] as ICategories[];

  constructor(private _productsService: ProductsAPIServiceService, private _router: Router, private _snakBar: MatSnackBar) {
  }


  ngOnInit(): void {
        this._productsService.GetAllCategories().subscribe(x=> this.catList = x);
    }

    AddProduct(){
      this._productsService.AddNewProduct(this.newPrd).subscribe(x=>console.log(x));
      this._snakBar.open("Product Added Successfully", "Close", {duration: 3000 , horizontalPosition: "right", verticalPosition: "top" , politeness: "assertive"});
      this._router.navigate(['/Products']);
    }
}
