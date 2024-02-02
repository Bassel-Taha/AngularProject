import { Component } from '@angular/core';
import {FooterComponent} from "../footer/footer.component";
import {HeaderComponent} from "../header/header.component";
import {HomeComponent} from "../home/home.component";
import {SideBarComponent} from "../side-bar/side-bar.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-lay-out',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    SideBarComponent,
    RouterOutlet
  ],
  templateUrl: './lay-out.component.html',
  styleUrl: './lay-out.component.scss'
})
export class LayOutComponent {

}
