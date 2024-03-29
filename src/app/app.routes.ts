import { Routes } from '@angular/router';
import {HomeComponent} from "./Components/home/home.component";
import {OrderMasterComponent} from "./Components/order-master/order-master.component";
import {ProductsListComponent} from "./Components/products-list/products-list.component";
import {LayOutComponent} from "./Components/lay-out/lay-out.component";
import {NotFoundComponent} from "./Components/not-found/not-found.component";
import {LogInComponent} from "./Components/log-in/log-in.component";
import {ProductsDetialsComponent} from "./Components/products-detials/products-detials.component";
import {AuthGuardGuard} from "../../Guards/AuthGard/auth-guard.guard";
import {AddingProductComponent} from "./Components/adding-product/adding-product.component";
import {RegisterUserComponent} from "./Components/register-user/register-user.component";

export const routes: Routes = [
  {path:"login" , component: LogInComponent},
  {path:"Register" , component: RegisterUserComponent},
  {path:"logout" , component: LogInComponent},
  {path:"" , component: LayOutComponent , children:[
      {path:"" , redirectTo:"/Home" , pathMatch:"full"},
      {path:"Home", component:HomeComponent},
      {path:"Order", component: OrderMasterComponent , canActivate: [AuthGuardGuard]},
      {path:"Products", component:ProductsListComponent},
      {path:"Products/Add", component:AddingProductComponent},
      {path:"Products/:ProductId" , component: ProductsDetialsComponent},
      {path:"**" , component:NotFoundComponent}
    ]},
];
