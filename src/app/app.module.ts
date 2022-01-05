import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import { AnimationContolDirective } from './directives/animation-contol.directive';
import { HttpClientModule } from '@angular/common/http';
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

@NgModule({
  declarations: [
    AppComponent,
    AnimationContolDirective,
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
    ProductinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatMenuModule,
    HttpClientModule,
    ReactiveFormsModule,
    SocialLoginModule
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
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
