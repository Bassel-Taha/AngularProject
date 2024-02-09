import {Component, Input, OnInit} from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {AuthServiceService} from "../../../Services/AuthService/auth-service.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [
    HeaderComponent,
    FormsModule
  ],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss'
})
export class LogInComponent implements OnInit{

  IsLogedIn! : boolean
constructor(private _authService : AuthServiceService) {
}

  ngOnInit(): void {
   this._authService.IsLogedIn.subscribe(status => this.IsLogedIn = status)
    }

    Login(username : string , password : string)
    {
      this._authService.LogIN( username , password);
      this._authService.IsLogedIn.subscribe(status => this.IsLogedIn = status)
    }

    Louout()
    {
      this._authService.LogOut();
      this._authService.IsLogedIn.subscribe(status => this.IsLogedIn = status)
    }

}
