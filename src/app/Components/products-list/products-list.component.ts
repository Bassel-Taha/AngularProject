import {Component, Input, input, OnChanges, SimpleChanges} from '@angular/core';
import {IProductsList} from "../../../Model/i-products-list";
import {CurrencyPipe, NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {Categories} from "../../../Model/categories";

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
    CurrencyPipe
  ],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})


export class ProductsListComponent implements OnChanges{
  ListOfProducts: IProductsList[];
  TotalPriceOfProducts: number = 0;
  CategoryList: Categories [];
  ProductsListByCategory: IProductsList[] = [];
  @Input() SentCategoryID?: number | string = "Select Category" ;

  constructor() {

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
        Quantity: 1,
        CategoryID: 1,
        ImgUrl: "https://th.bing.com/th/id/OIP.Bha841YBUq6Bx4OA_6SBaQHaFj?rs=1&pid=ImgDetMain",
        totalPriceOfSelectedQuatities :0,
        selectedQuantitiesOfProduct : 0

      },
      {
        ID: 200,
        Name: 'legion 5',
        Price: 35000,
        Quantity: 2,
        CategoryID: 1,
        ImgUrl: "https://th.bing.com/th/id/R.1b48232bed11b3988d38772e7bd75476?rik=h5rgDst6yhsAtQ&pid=ImgRaw&r=0",
        totalPriceOfSelectedQuatities :0,
        selectedQuantitiesOfProduct : 0


      },
      {
        ID: 300,
        Name: 'Note10+',
        Price: 15000,
        Quantity: 2,
        CategoryID: 2,
        ImgUrl: "https://th.bing.com/th/id/OIP.MkZSA_Rn7EQXv7UNxrhLdwHaHa?rs=1&pid=ImgDetMain",
        totalPriceOfSelectedQuatities :0,
        selectedQuantitiesOfProduct : 0


      },
      {
        ID: 400,
        Name: 'Dell G15',
        Price: 30000,
        Quantity: 1,
        CategoryID: 1,
        ImgUrl: "https://th.bing.com/th/id/OIP.VAQ7AP-jLts_OZ1bnC4ggQHaEK?rs=1&pid=ImgDetMain",
        totalPriceOfSelectedQuatities :0,
        selectedQuantitiesOfProduct : 0

      }
    ]

   /* calling ths methode to initialize the ProductsListByCategory during the first run of the page*/
    this.OnChangeSelectedCategory();

  }

  ngOnChanges(): void {
       this.OnChangeSelectedCategory();
    }



  TotalPriceCalc(ProductPrice:number , QuantityWantedProduct:any )
  {
    let temp : number = 0;
    this.TotalPriceOfProducts = 0;
    // @ts-ignore
    this.ProductsListByCategory.forEach( prod => prod.totalPriceOfSelectedQuatities = prod.selectedQuantitiesOfProduct* prod.Price)
    // @ts-ignore
     this.ProductsListByCategory.forEach(prop =>
     {
       // @ts-ignore
       temp = temp +prop.totalPriceOfSelectedQuatities
     });
    this.TotalPriceOfProducts = temp

  }




  protected readonly Number = Number;






  OnChangeSelectedCategory()   {
    if (this.SentCategoryID == "Select Category"){
      this.ProductsListByCategory = this.ListOfProducts
    }
    else
    {
      this.ProductsListByCategory = this.ListOfProducts.filter( prod => prod.CategoryID == this.SentCategoryID);
    }
  }
}
