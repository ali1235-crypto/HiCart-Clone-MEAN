
import { WishlistserviceService } from 'src/app/services/wishlistservice.service';
import { UsersService } from './services/users.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { Valid } from 'Valid';
import { Login } from './models/Login';
import { AuthServiceService } from './services/auth-service.service';
import { Router, ActivatedRoute } from '@angular/router';

import { NnavComponent } from './components/nnav/nnav.component';
import { WishList } from './models/WishList';
import { Product } from './models/Products';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AngEcom';

  static VAT=0

  //categories=['Electronics','Mobiles & Tablets','Fshion','Sports & leisure','Baby & Toys','Beauty','Home & kitchen','Books & Stationery','Liquors','Brand Store','Shop Local']
  banners=['banner1.jpg','banner2.jpg','banner3.jpg']
  immg=[false,false,false]

  offers=['offer1.jpg','offer2.jpg','offer4.jpg','offer1.jpg','offer2.jpg','offer4.jpg','offer1.jpg','offer2.jpg']






///





static bodyclass:HTMLCollectionOf<HTMLElement>


constructor(private authservice:AuthServiceService,private authSocialservice: SocialAuthService
  ,private router:Router,private wishservice:WishlistserviceService,private userserv:UsersService
  ,private route:ActivatedRoute) {
}



ngOnInit(): void {
  AppComponent.bodyclass=document.getElementsByClassName('bodyclass') as HTMLCollectionOf<HTMLElement>



  }


}
