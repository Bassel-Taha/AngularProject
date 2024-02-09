import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {routes} from "../../app/app.routes";
import {Router} from "@angular/router";
import {Location} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private IslogedInProp : BehaviorSubject<boolean>
  private _router: Router;
  private _location: Location;
  constructor(router : Router , location : Location) {
    this._router = router;
    this._location = location;
    this.IslogedInProp = new BehaviorSubject<boolean>(false)
  }

  LogIN(Username : string , Password : string) {
      //should send the username and the pass to the Auth API and get the validation token from it
    let  token = "123456789";
    localStorage.setItem('token' , token);
    this.IsLogedIn.subscribe()
    this._location.back()
    //this._router.navigate(['/Home'])


  }

  LogOut() {
localStorage.removeItem('token')
    this.IsLogedIn.subscribe()

  }

  get IsLogedIn(){

    localStorage.getItem('token')? this.IslogedInProp.next(true) : this.IslogedInProp.next(false)
    return this.IslogedInProp
  }
}
