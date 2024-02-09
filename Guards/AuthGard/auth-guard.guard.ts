import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthServiceService} from "../../src/Services/AuthService/auth-service.service";
import {ɵHTTP_ROOT_INTERCEPTOR_FNS} from "@angular/common/http";

export const AuthGuardGuard: CanActivateFn = (route, state) => {
  let isloggedin! : boolean
  let authservice = inject(AuthServiceService).IsLogedIn.subscribe(ex => isloggedin = ex);
  let router = inject(Router)
   if (isloggedin)
   {
    return true;
   }else {
     alert("Please Login or Sign up first");
     router.navigate(["/login"]);
     return false;
   }
};
