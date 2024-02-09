import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {AuthServiceService} from "../../../Services/AuthService/auth-service.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  _AuthService: AuthServiceService;
  constructor( AuthService : AuthServiceService ) {
    this._AuthService = AuthService;

  }

}
