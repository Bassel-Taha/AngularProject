import { Component } from '@angular/core';
import {StoredData} from "../../../Model/stored-data";
import {NgForOf, NgIf, NgStyle} from "@angular/common";
import {ProductsListComponent} from "../products-list/products-list.component";
import {OrderMasterComponent} from "../order-master/order-master.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgStyle,
    NgForOf,
    NgIf,
    ProductsListComponent,
    OrderMasterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  Data
  backgroundImage:string
  IsImageShowen:boolean = true;
  constructor() {
    this.Data = new StoredData("https://picsum.photos/1168/250", "Bassel Taha ", ["portsaid", "cairo", "damieta"])
    this.backgroundImage = this.Data.bgImage
  }

  ToggleImage() {
    this.IsImageShowen = !this.IsImageShowen;
  }
}


