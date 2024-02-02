import { Injectable } from '@angular/core';
import {IProduct} from "../Model/i-product";
import {ICategories} from "../Model/ICategories";

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private CategoryList : ICategories[];
  private ListOfProducts: IProduct[];

  constructor()
  {
    /*the list of categories*/
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

  }



  GetAllProducts():IProduct[]
  {
    return  this.ListOfProducts;
  }

  GetProductsByCategoryID(catID: number | string)
  {
    if (catID ==  "Select Category" )
      return this.GetAllProducts()
    else
      return this.ListOfProducts.filter(i=> i.CategoryID == catID)
  }

  GetProductByProductId(productId :number)
  {
    return this.ListOfProducts.find(i=> i.ID == productId)
  }





}
