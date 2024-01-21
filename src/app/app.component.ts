import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./Components/header/header.component";
import {FooterComponent} from "./Components/footer/footer.component";
import {HomeComponent} from "./Components/home/home.component";
import {SideBarComponent} from "./Components/side-bar/side-bar.component";
import {ProductsListComponent} from "./Components/Products/products-list/products-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, HomeComponent, SideBarComponent, ProductsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AngularProject';

}
