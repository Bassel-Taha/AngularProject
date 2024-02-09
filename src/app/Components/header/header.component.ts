import {Component, OnInit} from '@angular/core';
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
export class HeaderComponent implements OnInit{
  _AuthService: AuthServiceService;
  Isuserlogedin! : boolean
  constructor( AuthService : AuthServiceService ) {
    this._AuthService = AuthService;

  }

  ngOnInit(): void {
        this._AuthService.IsLogedIn.subscribe(
          status=> this.Isuserlogedin = status
        )
    }

}
