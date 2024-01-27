import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {Categories} from "../../../Model/categories";
import {IProductsList} from "../../../Model/i-products-list";
import {ProductsListComponent} from "../products-list/products-list.component";

@Component({
  selector: 'app-order-master',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    ProductsListComponent
  ],
  templateUrl: './order-master.component.html',
  styleUrl: './order-master.component.scss'
})
export class OrderMasterComponent
{
  ProductsListByCategory: IProductsList[] = [];
  CategoryList: Categories [];
  selectedCategoryID?: number | string = "Select Category" ;
  TotalPriceOfProducts: number = 0;

  constructor()
{
  this.CategoryList = [
    {
      ID: 1,
      Name: "laptop"
    },
    {
      ID: 2,
      Name: "Mobiles"
    },
    {
      ID: 3,
      Name: "desktops"
    },
    {
      ID: 4,
      Name: "Tablets"
    }
  ]
}

  OnChangeSelectedCategory()   {
    /*if (this.selectedCategoryID == "Select Category"){
      this.ProductsListByCategory = this.ListOfProducts
    }
    else
    {
      this.ProductsListByCategory = this.ListOfProducts.filter( prod => prod.CategoryID == this.selectedCategoryID);
    }*/
  }
}
