import { Routes } from '@angular/router';
import {HomeComponent} from "./Components/home/home.component";
import {OrderMasterComponent} from "./Components/order-master/order-master.component";
import {ProductsListComponent} from "./Components/products-list/products-list.component";
import {LayOutComponent} from "./Components/lay-out/lay-out.component";
import {NotFoundComponent} from "./Components/not-found/not-found.component";
import {LogInComponent} from "./Components/log-in/log-in.component";

export const routes: Routes = [
  {path:"login" , component: LogInComponent},
  {path:"" , component: LayOutComponent , children:[
      {path:"" , redirectTo:"/Home" , pathMatch:"full"},
      {path:"Home", component:HomeComponent},
      {path:"Order", component: OrderMasterComponent},
      {path:"Products", component:ProductsListComponent},
      {path:"**" , component:NotFoundComponent}
    ]},
];
