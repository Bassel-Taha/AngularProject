import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  HostListener,
  Input,
  input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {ICategories} from "../../../Model/ICategories";
import {IProduct} from "../../../Model/i-product";
import {ProductsListComponent} from "../products-list/products-list.component";
import {ProductsAPIServiceService} from "../../../Services/ProductsServiceAPI/products-apiservice.service";

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
export class OrderMasterComponent implements AfterViewInit , OnInit{
  catiguryList! : ICategories[]
  ProductsListByCategory?: IProduct[];
  selectedCategoryID_InTheMasterOrder: number | string = "All Categories";
  TotalPriceOfProducts: number = 0;
  @ViewChild(ProductsListComponent) productComponentObj!: ProductsListComponent;
  @Input() selectedProductsQuantities!: IProduct[]


  constructor(private productsService : ProductsAPIServiceService) {

  }

  ngOnInit(): void {
   this.productsService.GetAllCategories().subscribe(x => this.catiguryList = x)
    }


  ngAfterViewInit(): void {
    this.selectedProductsQuantities = this.productComponentObj.selectedProductsQuantities
   /* console.log(this.selectedProductsQuantities)*/       //for testing the code
  }

/*to get any output value you need to get it using a functions */
GettingSelectedProductQuantities(productsQuantitiesFromProductComponent :any )
{
  this.selectedProductsQuantities= productsQuantitiesFromProductComponent
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

  BuyButton()
  {
    this.productComponentObj.BuyButtonClick()
  }

}
