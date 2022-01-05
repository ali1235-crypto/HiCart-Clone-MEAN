import { SignupComponent } from './components/signup/signup.component';


import { Component, OnInit } from '@angular/core';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { Valid } from 'Valid';
import { Login } from './models/Login';
import { AuthServiceService } from './services/auth-service.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AngEcom';


  //categories=['Electronics','Mobiles & Tablets','Fshion','Sports & leisure','Baby & Toys','Beauty','Home & kitchen','Books & Stationery','Liquors','Brand Store','Shop Local']
  banners=['banner1.jpg','banner2.jpg','banner3.jpg']
  immg=[false,false,false]

  offers=['offer1.jpg','offer2.jpg','offer4.jpg','offer1.jpg','offer2.jpg','offer4.jpg','offer1.jpg','offer2.jpg']




//oprn login section
static openlogin=false
///
v=new Valid
public classReference = AppComponent;


user: SocialUser=new SocialUser;
loggedIn=false

constructor(private authservice:AuthServiceService,private authService: SocialAuthService) {
}

Login(){
  var log=new Login()
  log.email=this.v.email.value
  log.password=this.v.password.value
  this.authservice.Login(log).subscribe((res)=>{console.log(res);
    localStorage.setItem('token',res.accesToken)
  },(err)=>{console.log(err)})
}

ngOnInit(): void {
  this.authservice.isAdmin()

  this.authService.authState.subscribe((user) => {
    this.user = user;
    this.loggedIn = (user != null);
    if(this.loggedIn){
      if(AppComponent.openlogin){
        var log=new Login()
        log.email=user.email
        log.password=this.user.id+";;##@@.."+this.user.email+this.user.firstName
        this.authservice.Login(log).subscribe((res)=>{
          console.log(res);
          localStorage.setItem('token',res.accesToken)
        },(err)=>{console.log(err)})
      }

    }
    console.log(this.user)
  });

  }



  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

}
