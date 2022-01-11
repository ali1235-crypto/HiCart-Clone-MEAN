import { FooterComponent } from './components/footer/footer.component';
import { ListesProductsComponent } from './components/listes-products/listes-products.component';
import { ProductinfoComponent } from './components/productinfo/productinfo.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NnavComponent } from './components/nnav/nnav.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { VideComponent } from './components/vide/vide.component';
import { JoinnavComponent } from './components/joinnav/joinnav.component';
import { AdmincompComponent } from './components/admincomp/admincomp.component';
import { AutGuard } from './services/guard/auth.guard.ts.service';
import { AccdashboardComponent } from './components/routeacc/accdashboard/accdashboard.component';
import { AcceditComponent } from './components/routeacc/accedit/accedit.component';
import { UsersComponent } from './components/routeadmin/users/users.component';
import { ProductsComponent } from './components/routeadmin/products/products.component';
import { CategoriesComponent } from './components/routeadmin/categories/categories.component';
import { AddressComponent } from './components/routeacc/address/address.component';
import { WhilelistComponent } from './components/routeacc/whilelist/whilelist.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'join',component:SignupComponent},
  {path:'admin',component:AdmincompComponent,
  children:[
    {path:'',redirectTo:'users',pathMatch:'full'},
    {path:'users',component:UsersComponent},
    {path:'products',component:ProductsComponent},
    {path:'categories',component:CategoriesComponent}
  ]
},
  {path:'profile',component:ProfileComponent,
  children:[
    {path:'',redirectTo:'account',pathMatch:'full'},
    {path:'account',component:AccdashboardComponent},
    {path:'account/edit',component:AcceditComponent},
    {path:'account/address',component:AddressComponent},
    {path:'account/mywhilelist',component:WhilelistComponent}
  ]},
  {path:'product/:id',component:ProductinfoComponent},
  {path:':category',component:ListesProductsComponent},
  {path:':category/:subcategory',component:ListesProductsComponent},
  {path:':category/:subcategory/:subbcategory',component:ListesProductsComponent},
  {path:'nav',component:NnavComponent,outlet:'nav'},
  {path:'',component:NnavComponent,outlet:'nav'},
  {path:'vide',component:VideComponent,outlet:'nav'},
  {path:'joinnav',component:JoinnavComponent,outlet:'nav'},
  {path:'',component:FooterComponent,outlet:'footer'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
