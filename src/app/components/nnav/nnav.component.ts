import { ProductServiceService } from 'src/app/services/product-service.service';
import { CompareserviceService } from './../../services/compareservice.service';
import { CartserviceService } from './../../services/cartservice.service';
import { Product } from 'src/app/models/Products';
import { AppComponent } from './../../app.component';
import { UsersService } from './../../services/users.service';
import { Category } from './../../models/category';
import { CategoryServiceService } from './../../services/category-service.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faBalanceScale } from '@fortawesome/free-solid-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle as faTimesCircleReg} from '@fortawesome/free-regular-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { AuthServiceService } from 'src/app/services/auth-service.service';

import { Router } from '@angular/router';

import { WishList } from 'src/app/models/WishList';
import { WishlistserviceService } from 'src/app/services/wishlistservice.service';
import { HtmlAstPath } from '@angular/compiler';
import { Login } from 'src/app/models/Login';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { Valid } from 'Valid';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';



@Component({
  selector: 'app-nnav',
  templateUrl: './nnav.component.html',
  styleUrls: ['./nnav.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class NnavComponent implements OnInit {

  faSignInAlt=faSignInAlt
  faShoppingCart=faShoppingCart
  faHeart=faHeart
  faBalanceScale=faBalanceScale
  faWindowClose=faWindowClose
  faPencilAlt=faPencilAlt
  faTimesCircle=faTimesCircle
  faTimesCircleReg=faTimesCircleReg
  faTimes=faTimes

  opendelivery=false
  opendeliverydiv=false
  openreturns=false
  openreturnsdiv=false
  opencontact=false
  opencontactdiv=false

  openok=false
  opencart=false
  openwish=false
  opencompare=false

  divhover=false

  categroies:Category[]=[new Category()]
  ind=0

  hover=[false,false,false,false,false,false,false,false,false,false,false,false]


  static compare=0
  static cart=0
  static heart=0

  public classReference = AppComponent;
  public nav=NnavComponent

  static nameuser=''

  opensearchresult=false
  productssearch=[new Product]

  productswish=[{productid:new Product}]
  productscompare=[{productid:new Product}]
  productscart=[{productid:new Product,qty:1}]

  openlogin=false
  v=new Valid
  user: SocialUser=new SocialUser;
  loggedIn=false
  fullheight=''
  constructor(private _sanitizer: DomSanitizer,private categoryservice:CategoryServiceService,private router:Router,
    private auth:AuthServiceService,private userserv:UsersService,private wishservice:WishlistserviceService,private authSocialservice: SocialAuthService,
    private cartservice:CartserviceService,private compareservice:CompareserviceService,private productservice:ProductServiceService) {

  }

  ngOnInit(): void {
    //console.log(AppComponent.fullheight);

    this.getNameById()
    this.getCategories('')
    if(this.auth.isLoggedIn()){
      this.wishservice.getnbofhearts(this.auth.getId()).subscribe(res=>{
        if(res[0])this.nav.heart=res[0].products.length
        //this.productswish=res[0].productsid
        //console.log(this.productswish);
          this.nav.changestyle()
      },err=>{
        console.log(err);
      })
    }

    this.authSocialservice.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      if(this.loggedIn){
        if(this.openlogin){
          var log=new Login()
          log.email=user.email
          log.password=this.user.id+";;##@@.."+this.user.email+this.user.firstName
          this.auth.Login(log).subscribe((res)=>{
            console.log(res);
            localStorage.setItem('token',res.accesToken)
            this.router.navigate([{outlets:{primary:'profile',nav:'nav'}}])
            location.reload()
          },(err)=>{console.log(err)})


        }

      }

    });
  }


  getCategories(parent:string){
    this.categoryservice.getCategories(parent).subscribe((res)=>{
      this.categroies=res
      console.log(res)
    })
  }

  clear(){
    setTimeout(() => {
      this.opendelivery=false
      this.opencontact=false
      this.openreturns=false
    }, 70);
  }
  routeProducts(category:string){
    console.log(category);
    this.router.navigate(['/'+category])
  }
  routeProducts2(category:Category,subcategory:string){
    console.log(category);
    this.router.navigate(['/'+category.name+'/'+subcategory])
  }


  signInWithGoogle(): void {
    this.authSocialservice.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authSocialservice.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authSocialservice.signOut();
  }

  filterCategory(categorypath:string){

    let array=categorypath.split('/')
    var newcategorypath='in '
    array.forEach(value=>newcategorypath+=value+', ')
    newcategorypath=newcategorypath.substring(0,newcategorypath.length-2)
    return newcategorypath
    }

  Login(){
    var log=new Login()
    log.email=this.v.email.value
    log.password=this.v.password.value
    this.auth.Login(log).subscribe((res)=>{
      console.log(res);
      //location.reload()
      localStorage.setItem('token',res.accesToken)
      this.router.routeReuseStrategy.shouldReuseRoute=()=>false
      //setTimeout(() => {
        this.router.navigate([{outlets:{primary:'profile',nav:'nav'}}])
      //}, 30000);

    },(err)=>{console.log(err)})
  }

  static changestyle(){
    const heartcomparecart=document.getElementsByClassName('raduis') as HTMLCollectionOf<HTMLElement>
    if(heartcomparecart){
      if(this.heart>0){
        heartcomparecart[0].style.color="white"
        heartcomparecart[0].style.backgroundColor="#3c9ad5"
      }
      else{
        heartcomparecart[0].style.color="black"
        heartcomparecart[0].style.backgroundColor="white"
      }
      if(this.compare>0){
        heartcomparecart[1].style.color="white"
        heartcomparecart[1].style.backgroundColor="#3c9ad5"
      }
      else{
        heartcomparecart[1].style.color="black"
        heartcomparecart[1].style.backgroundColor="white"
      }
      if(this.cart>0){
        heartcomparecart[2].style.color="white"
        heartcomparecart[2].style.backgroundColor="#3c9ad5"
      }
      else{
        heartcomparecart[2].style.color="black"
        heartcomparecart[2].style.backgroundColor="white"
      }
    }
  }

  routeToHome(){
    this.router.navigate([''])

  }

  isLoggedIn(){
    return this.auth.isLoggedIn()
  }

  getNameById(){

    if(this.isLoggedIn()){

      this.userserv.getUser(this.auth.getId()).subscribe(res=>{
        NnavComponent.nameuser=res.firstname+', My Account'
        //console.log(this.name);
      },err=>{
        console.log(err);
      })
    }
  }
  LogOut(){
    localStorage.removeItem('token')
    NnavComponent.heart=0
    NnavComponent.cart=0
    NnavComponent.compare=0
    NnavComponent.nameuser=''
    this.router.navigate([{outlets:{primary:'home',nav:'nav'}}])
  }
  LoginLogout(){
    if(this.isLoggedIn()){
      this.LogOut()
    }
    else{
      this.fullheight=window.getComputedStyle(AppComponent.bodyclass[0]).height
      this.openlogin=true
    }
  }

  animatewish(){
    const wishliste=document.getElementsByClassName('wishcompareliste') as HTMLCollectionOf<HTMLElement>
    if(wishliste){

      if(this.openwish){
        const wishitem=document.querySelector('.wishcompareliste div')
        if(wishitem&&this.isLoggedIn())
        {
          setTimeout(() => {
            wishliste[0].style.height=160+59*(wishitem.childElementCount-2)+"px"
          }, 100);
          this.wishservice.getnbofhearts(this.auth.getId()).subscribe(res=>{

            this.productswish=res[0].products
            //console.log(this.productswish);
            if(this.nav.heart!=0){
              this.nav.changestyle()
            }
          },err=>{
            console.log(err);
          })

        }
        else{
          wishliste[0].style.height="75px"
        }

      }
      else{
        wishliste[0].style.height="0px"

      }
    }
  }

  animatecompare(){
    const compareliste=document.getElementsByClassName('wishcompareliste') as HTMLCollectionOf<HTMLElement>
    if(compareliste){

      if(this.opencompare){
        const compareitem=document.querySelectorAll('.wishcompareliste > div')
        if(compareitem&&this.isLoggedIn()){
        setTimeout(() => {
          compareliste[1].style.height=165+59*(compareitem[1].childElementCount-2)+"px"
        }, 100);
        this.compareservice.getnbofcopmares(this.auth.getId()).subscribe(res=>{

          this.productscompare=res[0].products
          //console.log(this.productswish);
          if(this.nav.heart!=0){
            this.nav.changestyle()
          }
        },err=>{
          console.log(err);
        })
      }
      else{
        compareliste[1].style.height="75px"
      }
      }
      else{
        compareliste[1].style.height="0px"

      }

    }
  }

  animatecart(){
    const cartliste=document.getElementsByClassName('cartliste') as HTMLCollectionOf<HTMLElement>
    if(cartliste){

      if(this.opencart){
        setTimeout(() => {
          cartliste[0].style.zIndex="9"
          cartliste[0].style.opacity='1'
        }, 100);
        if(this.isLoggedIn()){
          this.cartservice.getnbofcarts(this.auth.getId()).subscribe(res=>{

            this.productscart=res[0].products
            //console.log(this.productswish);
            if(this.nav.heart!=0){
              this.nav.changestyle()
            }
          },err=>{
            console.log(err);
          })
        }
      }
      else{
        cartliste[0].style.zIndex="-1"
        cartliste[0].style.opacity='0'

      }

    }
  }

  seacrch(e:any){
    //console.log(window.getComputedStyle(AppComponent.bodyclass[0]).height);
    this.fullheight=window.getComputedStyle(AppComponent.bodyclass[0]).height
    if(e.target.value){
      setTimeout(() => {
        this.opensearchresult=true
      }, 100);
      this.productservice.search(e.target.value).subscribe(res=>{
        //console.log(res);
        this.productssearch=res

      },err=>{
        console.log(err);
      })
    }
    else{
      this.opensearchresult=false
    }
  }

  getInnerHtml(text:string,inputvalue:string){
    //if(!text)return text
      return this._sanitizer.bypassSecurityTrustHtml(text.replace(new RegExp(inputvalue,"gi"),"<mark>$&</mark>"))
  }
}
