import { Component } from '@angular/core';
import {ProductsList} from "../../../../Model/products-list";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent {
  ListOfProducts:ProductsList[];
  constructor() {
    this.ListOfProducts=[
      {
        ID:100,
        Name:'Lenovo Y520',
        Price:15000,
         Quantity:1,
        CategoryID:1,
        ImgUrl:"https://th.bing.com/th/id/OIP.Bha841YBUq6Bx4OA_6SBaQHaFj?rs=1&pid=ImgDetMain"
      },
      {
        ID : 200,
        Name : 'legion 5',
        Price : 35000,
        Quantity : 2,
        CategoryID : 1,
        ImgUrl:"https://th.bing.com/th/id/R.1b48232bed11b3988d38772e7bd75476?rik=h5rgDst6yhsAtQ&pid=ImgRaw&r=0"
      },
      {
        ID : 300,
        Name : 'Note10+',
        Price : 15000,
        Quantity : 2,
        CategoryID : 2,
        ImgUrl:"https://th.bing.com/th/id/OIP.MkZSA_Rn7EQXv7UNxrhLdwHaHa?rs=1&pid=ImgDetMain"
      },
      {
        ID : 400,
        Name : 'Dell G15',
        Price : 30000,
        Quantity : 1,
        CategoryID : 1,
        ImgUrl:"https://th.bing.com/th/id/OIP.VAQ7AP-jLts_OZ1bnC4ggQHaEK?rs=1&pid=ImgDetMain"
      }
      ]
  }

}
