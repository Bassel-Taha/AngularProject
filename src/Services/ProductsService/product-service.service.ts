import { Injectable } from '@angular/core';
import {IProduct} from "../../Model/i-product";
import {ICategories} from "../../Model/ICategories";

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
        id: 1,
        Name: "laptop"
      },
      {
        id: 2,
        Name: "Mobiles"
      },
      {
        id: 3,
        Name: "desktops"
      },
      {
        id: 4,
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
        selectedQuantitiesToBuy : 0,
        brand : "Lenovo"

      },
      {
        ID: 200,
        Name: 'legion 5',
        Price: 35000,
        RemainingQuantity: 2,
        CategoryID: 1,
        ImgUrl: "https://th.bing.com/th/id/R.1b48232bed11b3988d38772e7bd75476?rik=h5rgDst6yhsAtQ&pid=ImgRaw&r=0",
        totalPriceOfSelectedQuatities :0,
        selectedQuantitiesToBuy : 0,
        brand : "Lenovo"


      },
      {
        ID: 300,
        Name: 'Note10+',
        Price: 15000,
        RemainingQuantity: 2,
        CategoryID: 2,
        ImgUrl: "https://th.bing.com/th/id/OIP.MkZSA_Rn7EQXv7UNxrhLdwHaHa?rs=1&pid=ImgDetMain",
        totalPriceOfSelectedQuatities :0,
        selectedQuantitiesToBuy : 0,
        brand : "Samsung"


      },
      {
        ID: 400,
        Name: 'Dell G15',
        Price: 30000,
        RemainingQuantity: 1,
        CategoryID: 1,
        ImgUrl: "https://th.bing.com/th/id/OIP.VAQ7AP-jLts_OZ1bnC4ggQHaEK?rs=1&pid=ImgDetMain",
        totalPriceOfSelectedQuatities :0,
        selectedQuantitiesToBuy : 0,
        brand : "Dell"

      }
    ]

  }



  GetAllCategories()
  {
    return this.CategoryList
  }


  GetAllProducts():IProduct[]
  {
    return  this.ListOfProducts;
  }

  GetProductsByCategoryID(catID: number | string)
  {
    if (catID ==  "All Categories" )
      return this.GetAllProducts()
    else
      return this.ListOfProducts.filter(i=> i.CategoryID == catID)
  }

  GetProductByProductId(productId :number)
  {
    return this.ListOfProducts.find(i=> i.ID == productId)
  }

  ListOfSelectedProductsWithTheQuantities(allProductsFromTheProductComponent: IProduct[]): IProduct[] {
    let selectedProducts: IProduct[] = [] as IProduct[]
    for (let product of allProductsFromTheProductComponent) {

      if (product.selectedQuantitiesToBuy! > 0 && product != null) {
        selectedProducts.push(product)
      }
    }
    return selectedProducts;
  }



}
