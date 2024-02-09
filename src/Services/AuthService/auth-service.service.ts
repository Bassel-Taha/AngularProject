import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private IslogedInProp : BehaviorSubject<boolean>
  constructor() {
    this.IslogedInProp = new BehaviorSubject<boolean>(false)
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

  get IsLogedIn():BehaviorSubject<boolean>{

    localStorage.getItem('token')? this.IslogedInProp.next(true) : this.IslogedInProp.next(false)
    return this.IslogedInProp
  }
}
