import { TokenInterceptorService } from './services/token-interceptor.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './components/signup/signup.component';
import { NnavComponent } from './components/nnav/nnav.component';
import { HomeComponent } from './components/home/home.component';
import { VideComponent } from './components/vide/vide.component';
import { JoinnavComponent } from './components/joinnav/joinnav.component';
import { AdmincompComponent } from './components/admincomp/admincomp.component';

import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';
import { ProfileComponent } from './components/profile/profile.component';
import { AccdashboardComponent } from './components/routeacc/accdashboard/accdashboard.component';
import { AcceditComponent } from './components/routeacc/accedit/accedit.component';
import { UsersComponent } from './components/routeadmin/users/users.component';
import { ProductsComponent } from './components/routeadmin/products/products.component';
import { CategoriesComponent } from './components/routeadmin/categories/categories.component';
import { AddressComponent } from './components/routeacc/address/address.component';
import { WhilelistComponent } from './components/routeacc/whilelist/whilelist.component';
import { ProductinfoComponent } from './components/productinfo/productinfo.component';
import { ListesProductsComponent } from './components/listes-products/listes-products.component';
import { FooterComponent } from './components/footer/footer.component';
import { LitesProductsParentcategoryComponent } from './components/lites-products-parentcategory/lites-products-parentcategory.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { BannersComponent } from './components/routeadmin/banners/banners.component';
import { OffersComponent } from './components/routeadmin/offers/offers.component';
import { OrdersComponent } from './components/routeadmin/orders/orders.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { MyorderComponent } from './components/routeacc/myorder/myorder.component';
import { SubscComponent } from './components/routeacc/subsc/subsc.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    NnavComponent,
    HomeComponent,
    VideComponent,
    JoinnavComponent,
    AdmincompComponent,
    ProfileComponent,
    AccdashboardComponent,
    AcceditComponent,
    UsersComponent,
    ProductsComponent,
    CategoriesComponent,
    AddressComponent,
    WhilelistComponent,
    ProductinfoComponent,
    ListesProductsComponent,
    FooterComponent,
    LitesProductsParentcategoryComponent,
    OffersComponent,
    BannersComponent,
    OrdersComponent,
    ShoppingCartComponent,
    MyorderComponent,
    SubscComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatMenuModule,
    HttpClientModule,
    ReactiveFormsModule,
    SocialLoginModule,
    NgxCaptchaModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '204948646394-gkar307jdjeb612dj01h48d7cdsadrap.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('clientId')
          }
        ]
      } as SocialAuthServiceConfig,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
