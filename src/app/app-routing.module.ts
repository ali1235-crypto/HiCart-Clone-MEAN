import { SubscComponent } from './components/routeacc/subsc/subsc.component';
import { MyorderComponent } from './components/routeacc/myorder/myorder.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { BannersComponent } from './components/routeadmin/banners/banners.component';
import { OffersComponent } from './components/routeadmin/offers/offers.component';
import { LitesProductsParentcategoryComponent } from './components/lites-products-parentcategory/lites-products-parentcategory.component';
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
import { AuthGuard } from './services/guard/auth.guard.ts.service';
import { AccdashboardComponent } from './components/routeacc/accdashboard/accdashboard.component';
import { AcceditComponent } from './components/routeacc/accedit/accedit.component';
import { UsersComponent } from './components/routeadmin/users/users.component';
import { ProductsComponent } from './components/routeadmin/products/products.component';
import { CategoriesComponent } from './components/routeadmin/categories/categories.component';
import { AddressComponent } from './components/routeacc/address/address.component';
import { WhilelistComponent } from './components/routeacc/whilelist/whilelist.component';
import { OrdersComponent } from './components/routeadmin/orders/orders.component';
import { AuthadminService } from './services/guard/authadmin.service';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'join',component:SignupComponent},
  {path:'admin',component:AdmincompComponent,canActivate:[AuthadminService],
  children:[
    {path:'',redirectTo:'users',pathMatch:'full'},
    {path:'users',component:UsersComponent},
    {path:'products',component:ProductsComponent},
    {path:'categories',component:CategoriesComponent},
    {path:'offers',component:OffersComponent},
    {path:'banners',component:BannersComponent},
    {path:'orders',component:OrdersComponent}
  ]
},
  {path:'profile',component:ProfileComponent,canActivate:[AuthGuard],
  children:[
    {path:'',redirectTo:'account',pathMatch:'full'},
    {path:'account',component:AccdashboardComponent},
    {path:'account/edit',component:AcceditComponent},
    {path:'account/address',component:AddressComponent},
    {path:'account/mywhilelist',component:WhilelistComponent},
    {path:'account/order',component:MyorderComponent},
    {path:'account/subscription',component:SubscComponent},
  ]},
  {path:'checkout/cart',component:ShoppingCartComponent},
  {path:'product/:id',component:ProductinfoComponent},
  {path:':category',component:LitesProductsParentcategoryComponent},
  {path:':category/:subcategory',component:ListesProductsComponent},
  {path:':category/:subcategory/:subbcategory',component:ListesProductsComponent},
  {path:'',component:NnavComponent,outlet:'nav'},
  {path:'nav',component:NnavComponent,outlet:'nav'},
  {path:'vide',component:VideComponent,outlet:'nav'},
  {path:'joinnav',component:JoinnavComponent,outlet:'nav'},
  {path:'',component:FooterComponent,outlet:'footer'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
