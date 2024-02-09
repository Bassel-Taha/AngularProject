import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  IslogedInProp : boolean = false
  constructor() {
  }

  LogIN(Username : string , Password : string) {
      //should send the username and the pass to the Auth API and get the validation token from it
    let  token = "123456789";
    localStorage.setItem('token' , token);
    this.IsLogedIn
  }

  LogOut() {
localStorage.removeItem('token')
    this.IsLogedIn
  }

  get IsLogedIn():boolean{

    this.IslogedInProp = ((localStorage.getItem('token'))? true : false) ;
    return this.IslogedInProp
  }
}
