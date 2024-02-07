import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() {
  }

  LogIN(Username : string , Password : string) {
      //should send the username and the pass to the Auth API and get the validation token from it
    let  token = "123456789";
    localStorage.setItem('token' , token);
  }

  LogOut() {
localStorage.removeItem('token')
  }

  get IsLogedIn():boolean{

    return (localStorage.getItem('token'))? true : false
  }
}
