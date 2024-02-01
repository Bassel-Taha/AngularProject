import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {IProduct} from "../../../Model/i-product";
import {CurrencyPipe, NgForOf, NgOptimizedImage} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {Categories} from "../../../Model/categories";
import {LightHouseDirective} from "../../Direectives/light-house.directive";

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
  ListOfProducts: IProduct[];
  /*TotalPriceOfProducts: number = 0;*/
  CategoryList: Categories [];
  ProductsListByCategory: IProduct[] = [];
  @Input() SentCategoryID?: number | string = "Select Category" ;
  @Input() selectedProductsQuantities!: IProduct[]
  @Output()  TotalPriceEvent : EventEmitter<any> ;
  @Output()  ProductsQuantitiesEvent : EventEmitter<any> ;


  constructor() {

    this.TotalPriceEvent = new EventEmitter<any>();
    this.ProductsQuantitiesEvent = new EventEmitter<any>();
    /*the list of categories */
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

    /*the list of products*/
    this.ListOfProducts = [
      {
        ID: 100,
        Name: 'Lenovo Y520',
        Price: 15000,
        RemainingQuantity: 1,
        CategoryID: 1,
        ImgUrl: "https://th.bing.com/th/id/OIP.Bha841YBUq6Bx4OA_6SBaQHaFj?rs=1&pid=ImgDetMain",
        totalPriceOfSelectedQuatities :0,
        selectedQuantitiesToBuy : 0

      },
      {
        ID: 200,
        Name: 'legion 5',
        Price: 35000,
        RemainingQuantity: 2,
        CategoryID: 1,
        ImgUrl: "https://th.bing.com/th/id/R.1b48232bed11b3988d38772e7bd75476?rik=h5rgDst6yhsAtQ&pid=ImgRaw&r=0",
        totalPriceOfSelectedQuatities :0,
        selectedQuantitiesToBuy : 0


      },
      {
        ID: 300,
        Name: 'Note10+',
        Price: 15000,
        RemainingQuantity: 2,
        CategoryID: 2,
        ImgUrl: "https://th.bing.com/th/id/OIP.MkZSA_Rn7EQXv7UNxrhLdwHaHa?rs=1&pid=ImgDetMain",
        totalPriceOfSelectedQuatities :0,
        selectedQuantitiesToBuy : 0


      },
      {
        ID: 400,
        Name: 'Dell G15',
        Price: 30000,
        RemainingQuantity: 1,
        CategoryID: 1,
        ImgUrl: "https://th.bing.com/th/id/OIP.VAQ7AP-jLts_OZ1bnC4ggQHaEK?rs=1&pid=ImgDetMain",
        totalPriceOfSelectedQuatities :0,
        selectedQuantitiesToBuy : 0

      }
    ]

   /* calling ths methode to initialize the ProductsListByCategory during the first run of the page*/
    this.OnChangeSelectedCategory();

  }

  ngOnChanges(): void {
       this.OnChangeSelectedCategory();
        this.selectedProductsQuantities = this.ListOfSelectedProductsWithTheQuantities(this.ProductsListByCategory)
    }



  BuyButtonClick()
  {

    this.TotalPriceEvent.emit(this.ProductsListByCategory);
    this.selectedProductsQuantities = this.ListOfSelectedProductsWithTheQuantities(this.ProductsListByCategory)
    this.ProductsQuantitiesEvent.emit(this.selectedProductsQuantities)
    //for checking the code
    /*console.log(this.selectedProductsQuantities)*/

  }



  OnChangeSelectedCategory()   {
    if (this.SentCategoryID == "Select Category"){
      this.ProductsListByCategory = this.ListOfProducts
    }
    else
    {
      this.ProductsListByCategory = this.ListOfProducts.filter( prod => prod.CategoryID == this.SentCategoryID);
    }
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




/*all that code below is for calculating the total price in these components but the calculation is going to happen in the order component when adding it to the buy button*/
/* let temp : number = 0;
 this.TotalPriceOfProducts = 0;
 // @ts-ignore
 this.ProductsListByCategory.forEach( prod => prod.totalPriceOfSelectedQuatities = prod.selectedQuantitiesOfProduct* prod.Price)
 // @ts-ignore
  this.ProductsListByCategory.forEach(prop =>
  {
    // @ts-ignore
    temp = temp +prop.totalPriceOfSelectedQuatities
  });
 this.TotalPriceOfProducts = temp*/
