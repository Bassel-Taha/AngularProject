import { Component } from '@angular/core';
import {StoredData} from "../../Model/stored-data";
import {NgForOf, NgIf, NgStyle} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgStyle,
    NgForOf,
    NgIf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  Data
  backgroundImage:string
  IsImageShowen:boolean = true;
  constructor() {
    this.Data = new StoredData("https://picsum.photos/1168/250", "Bassel Taha ", ["portsaid", "cairo", "alexandria", "damieta"])
    this.backgroundImage = this.Data.bgImage
  }

  ToggleImage() {
    this.IsImageShowen = !this.IsImageShowen;
  }
}


