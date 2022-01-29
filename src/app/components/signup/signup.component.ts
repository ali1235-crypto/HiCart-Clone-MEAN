import { CompareList } from './../../models/CompareList';
import { CompareserviceService } from './../../services/compareservice.service';
import { CartserviceService } from './../../services/cartservice.service';
import { Component, OnInit } from '@angular/core';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import { User } from 'src/app/models/User';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Valid } from 'Valid';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { SocialLoginModule, SocialAuthServiceConfig, SocialAuthService, SocialUser } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';
import { Router } from '@angular/router';
import { WishlistserviceService } from 'src/app/services/wishlistservice.service';
import { WishList } from 'src/app/models/WishList';
import { CartList } from 'src/app/models/CartList';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  faEnvelope=faEnvelope

  v=new Valid

  selectformcontrol=['dateday','datemonth','dateyear']

  date_array:Array<Object[]>=[]
  select_title=['Day','Month','Year']
  openerror=false

  passwordvalue=""
  titleSignUp="Signup with your email address"

  user: SocialUser=new SocialUser;
  loggedIn=false
  typeuser='Email'
  constructor(private auth:AuthServiceService,private authService: SocialAuthService,private router:Router
    ,private wishservice:WishlistserviceService,private cartservice:CartserviceService,private compareservice:CompareserviceService) { this.date_array_fct()}

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      if(this.loggedIn){
        this.titleSignUp="Complete Info For Registration"
        this.v.firstname.setValue(this.user.firstName)
        this.v.lastname.setValue(this.user.lastName)
        this.v.email.setValue(this.user.email)
        this.v.password.setValue(this.user.id+";;##@@.."+this.user.email+this.user.firstName)
        this.v.confirmpassword.setValue(this.user.id+";;##@@.."+this.user.email+this.user.firstName)
        this.typeuser='Google'
      }
      console.log(this.user)
    });
  }

date_array_fct(){
  var date_day=[]
  for(var i=1;i<32;i++){
    date_day.push(i)
  }

  var date_year=[]
  for(var i=1907;i<2008;i++){
    date_year.push(i)
  }

  var date_month=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  this.date_array.push(date_day,date_month,date_year)
}

Register(){
  if(this.v.form.valid){
    const reg=new User()
    reg.firstname=this.v.firstname.value
    reg.lastname=this.v.lastname.value
    reg.email=this.v.email.value
    reg.password=this.v.password.value
    reg.gender=this.v.gender.value
    reg.emsubscribe=this.v.accept.value
    reg.mobilenumber=this.v.phone.value
    reg.type=this.typeuser

    const d=new Date(this.v.dateyear.value,this.v.datemonth.value,this.v.dateday.value)
    reg.dateofbirth=this.v.dateyear.value+"-"+this.v.datemonth.value+"-"+this.v.dateday.value
    this.auth.Register(reg).subscribe(res=>{
      console.log(res);
      location.reload()
      localStorage.setItem('token',res.accesToken)
      this.router.routeReuseStrategy.shouldReuseRoute=()=>false
      this.router.onSameUrlNavigation='reload'
      setTimeout(() => {
        this.router.navigate([{outlets:{primary:'profile',nav:'nav'}}])
      }, 200);
    },err=>{
      console.log(err);
    })
    }
}

eventCheck(event:any){
    this.v.accept.patchValue=event.target.checked
  }

checkRegex(reg:string){
    const regexp=new RegExp(reg)
    return  regexp.test(this.v.password.value)
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
