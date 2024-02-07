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
  @Input('username') username! : string
  @Input() password! : string
constructor(private _authService : AuthServiceService) {
}

  ngOnInit(): void {
   this.IsLogedIn =  this._authService.IsLogedIn;
    }

    Login(username : string , password : string)
    {
      this._authService.LogIN( this.username , this.password);
      this.IsLogedIn = this._authService.IsLogedIn;
    }

    Louout()
    {
      this._authService.LogOut();
      this.IsLogedIn = this._authService.IsLogedIn;
    }

}
