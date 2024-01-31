import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  HostListener,
  Input,
  input,
  OnChanges,
  OnInit,
  ViewChild
} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {Categories} from "../../../Model/categories";
import {IProduct} from "../../../Model/i-product";
import {ProductsListComponent} from "../products-list/products-list.component";
import {ChangeDetection} from "@angular/cli/lib/config/workspace-schema";

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
export class OrderMasterComponent implements AfterViewInit {

  ProductsListByCategory?: IProduct[];
  CategoryList: Categories [];
  selectedCategoryID_InTheMasterOrder?: number | string = "Select Category";
  TotalPriceOfProducts: number = 0;
  @ViewChild(ProductsListComponent) productComponentObj!: ProductsListComponent;
  selectedProductsQuantities! : IProduct[]


  constructor() {
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




  ngAfterViewInit(): void {


  }



  TotalPriceCalc(ProductsListByCategoryFromProductComponent: IProduct[]) {
    this.ProductsListByCategory = ProductsListByCategoryFromProductComponent;

    let temp: number = 0;
    this.TotalPriceOfProducts = 0;
    // @ts-ignore
    this.ProductsListByCategory.forEach(prod => prod.totalPriceOfSelectedQuatities = prod.selectedQuantitiesToBuy * prod.Price)
    // @ts-ignore
    this.ProductsListByCategory.forEach(prop => {
      // @ts-ignore
      temp = temp + prop.totalPriceOfSelectedQuatities;
    });
    this.TotalPriceOfProducts = temp
  }





}
