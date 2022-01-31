import { CartList } from './../../models/CartList';
import { CartserviceService } from './../../services/cartservice.service';
import { CompareserviceService } from './../../services/compareservice.service';
import { OfferbannerServiceService } from './../../services/offerbanner-service.service';
import { CategoryServiceService } from './../../services/category-service.service';
import { ProductServiceService } from './../../services/product-service.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Product } from 'src/app/models/Products';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faStar } from '@fortawesome/free-regular-svg-icons';
import { faBalanceScale } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

import { AuthServiceService } from 'src/app/services/auth-service.service';
import { NnavComponent } from '../nnav/nnav.component';
import { BannerOffer } from 'src/app/models/banneroffer';
import { WishlistserviceService } from 'src/app/services/wishlistservice.service';
import { noAuto } from '@fortawesome/fontawesome-svg-core';
import { WishList } from 'src/app/models/WishList';
import { CompareList } from 'src/app/models/CompareList';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {

  title = 'AngEcom';

  faShoppingCart=faShoppingCart
  faHeart=faHeart
  faBalanceScale=faBalanceScale
  faStar=faStar
  //categories=['Electronics','Mobiles & Tablets','Fshion','Sports & leisure','Baby & Toys','Beauty','Home & kitchen','Books & Stationery','Liquors','Brand Store','Shop Local']

  immg=[false,false,false]

  banners=[new BannerOffer]
  offers=[new BannerOffer]





//


titlep=["Refrigerators","Cookers"]



lengthimgfigure=0
interval!:any
control=0

productshome=[[new Product]]
counter=0

constructor(private productservice:ProductServiceService ,private authservice:AuthServiceService,private compareservice:CompareserviceService,private cartservice:CartserviceService
  ,private wishservice:WishlistserviceService,private router:Router,private boservice:OfferbannerServiceService) {
}

getProducts(category:string){
  this.productservice.getProductsByCategory(category).subscribe((res)=>{this.productshome=res;console.log(this.productshome)},(err)=>console.log(err))
}



ngOnInit(): void {
  const figure=document.querySelector<HTMLElement>('.banners figure')

  if(figure){
    var i=0

    this.interval=setInterval(() => {
      const spans=document.querySelectorAll<HTMLElement>('.banners span')
      if(spans){
        spans.forEach((span)=>{
        span.classList.remove('spantrue')
        })
        spans[i].classList.add('spantrue')
      // console.log(spans);
      }
      figure.style.left=this.control+"px"
      i++
      if(i==3)i=0
      this.control-=1349
      if(this.control==-(figure.children.length)*1349){
        this.control=0
      }

    }, 7000);
  }


  this.productshome.splice(0,1)
          console.log('object',this.productshome);
          this.titlep.forEach((value,index)=>{
              this.productservice.getProductsByCategory(value,'1','8').subscribe(res=>{
                this.productshome[index]=res.products
                setTimeout(() => {
                  window.addEventListener("mousemove",(e)=>{this.sectionArrowMove(e,this.indexdiv)})
                }, 200);
                const productsClass=document.getElementsByClassName('products') as HTMLCollectionOf<HTMLElement>
                if(productsClass[index])productsClass[index].style.width=209*this.productshome[index].length+6*(this.productshome[index].length-1)+"px"

              })
          })
  window.addEventListener("mouseup", () => {
    this.isPressedDown = false;
  });

  this.boservice.getBanners().subscribe(res=>{
    this.banners=res
    if(figure)figure.style.width=this.banners.length*1349+"px"
      this.lengthimgfigure =this.banners.length
  },err=>{
    console.log(err);
  })
  this.boservice.getOffers().subscribe(res=>{
    this.offers=res
    console.log(res);
  },err=>{
    console.log(err);
  })
}
animateBannerImg(i:number){
  const figure=document.querySelector<HTMLElement>('.banners figure')
  const spans=document.querySelectorAll<HTMLElement>('.banners span')
  if(spans){
    spans.forEach(span=>{
      span.classList.remove('spantrue')
    })
  }
  if(figure){
    this.control=-i*1349
    console.log(spans);
    if(spans)spans[i].classList.add('spantrue')
    figure.style.left=this.control+"px"

  }
  console.log(i);
}

startx=0
  isPressedDown=false

  indexdiv=0
  leftproducts=0
  lastpoint=0
  lopp=0
animateEnter(e:any,i:number){
  const parentproducts=document.getElementsByClassName('parentproducts')  as HTMLCollectionOf<HTMLElement>
  const products=document.getElementsByClassName('products')  as HTMLCollectionOf<HTMLElement>
  this.isPressedDown=true
  this.startx=e.clientX
  this.indexdiv=i
  if(parentproducts[i])parentproducts[i].style.cursor='grabbing'
  this.leftproducts=parseInt(window.getComputedStyle(products[this.indexdiv]).left)

}
animateEnterup(i:number){const parentproducts=document.getElementsByClassName('parentproducts') as HTMLCollectionOf<HTMLElement>
  if(parentproducts[i])parentproducts[i].style.cursor='grab'
}
sectionArrowMove(e:any,i:number){
  var products=document.getElementsByClassName('products') as HTMLCollectionOf<HTMLElement>
    var products_items=document.getElementsByClassName('product-item') as HTMLCollectionOf<HTMLElement>


  if(products[this.indexdiv]&&products_items){
    if (!this.isPressedDown) {
      //console.log('kkk');
      this.lastpoint=0
     // console.log(parseInt(window.getComputedStyle(products[this.indexdiv]).left))
    if((parseInt(window.getComputedStyle(products[this.indexdiv]).left)<=215&&parseInt(window.getComputedStyle(products[this.indexdiv]).left)>=0)||(parseInt(window.getComputedStyle(products[this.indexdiv]).left)<=-((products[this.indexdiv].childElementCount)-6)*215)){
      if(parseInt(window.getComputedStyle(products[this.indexdiv]).left)<=-(products[this.indexdiv].childElementCount-6)*215){
        console.log('object');
        products[this.indexdiv].style.left=-(products[this.indexdiv].childElementCount-6)*215+'px'
      }
      else{
        products[this.indexdiv].style.left='0px'
        console.log(';;;');
      }
  }
  else if(parseInt(window.getComputedStyle(products[this.indexdiv]).left)%215!=0){
    if(parseInt(window.getComputedStyle(products[this.indexdiv]).left)>215){
      products[this.indexdiv].style.left="0px"
      console.log('oooopppp');
    }
    var reste=Math.round(parseInt(window.getComputedStyle(products[this.indexdiv]).left)/215)
    products[this.indexdiv].style.left=reste*215+'px'
    console.log('offbject');
  }

  }
    else{console.log('oooo');
      e.preventDefault();
      products[this.indexdiv].style.transition="none"
  if(parseInt(window.getComputedStyle(products[this.indexdiv]).left)<=215&&parseInt(window.getComputedStyle(products[this.indexdiv]).left)>=-(products[this.indexdiv].childElementCount-5)*215){

    products[this.indexdiv].style.left = `${this.leftproducts+e.clientX-this.startx}px`;
    //console.log("1");
  }
  else if(parseInt(window.getComputedStyle(products[this.indexdiv]).left)>215&&this.lastpoint>e.clientX-this.startx||parseInt(window.getComputedStyle(products[this.indexdiv]).left)<-(products[this.indexdiv].childElementCount-5)*215&&this.lastpoint<e.clientX-this.startx){
    if(this.lopp==0){
      this.leftproducts=parseInt(window.getComputedStyle(products[this.indexdiv]).left)
      this.startx=e.clientX
      this.lopp++
    }
    //console.log("2",this.lastpoint,e.clientX-this.startx);
    products[this.indexdiv].style.left = `${this.leftproducts+e.clientX-this.startx}px`;
  }
  else{
    this.lopp=0

    //console.log("3");
  }
  this.lastpoint=e.clientX-this.startx
    }
}
}

prevButton2(index:number){
  const products=document.getElementsByClassName('products') as HTMLCollectionOf<HTMLElement>
  if(products){
    //console.log(products);
    products[index].style.transition="left 1s"
     this.counter++
     if(this.counter==1)this.counter=6-products[index].childElementCount
      products[index].style.left=this.counter*(215)+"px"
    }
}
nextButton2(index:number){
  const products=document.getElementsByClassName('products') as HTMLCollectionOf<HTMLElement>
  if(products){
    //console.log(products);
    products[index].style.transition="left 1s"
    this.counter--
    if(this.counter==5-products[index].childElementCount)this.counter=0
      products[index].style.left=this.counter*(215)+"px"
    }
  }



  addCartWishCompare(prid:string,title:string,index:number){
    if(this.authservice.isLoggedIn()){
      if(title=='cart'){
        if(NnavComponent.cart==0){
          var cart=new CartList
          cart.userid=this.authservice.getId()
          cart.products=[{productid:prid as any,qty:1,comment:''}]
          this.cartservice.addCartList(cart).subscribe(res=>{
            console.log(res);
            NnavComponent.cart=res.products.length
            NnavComponent.changestyle()
          },err=>{
            console.log(err);
          })
        }
        else{
          this.cartservice.updateCartList(this.authservice.getId(),prid,index).subscribe(res=>{
            NnavComponent.cart=res.products.length
            NnavComponent.changestyle()
          },err=>{
            console.log(err);
          })
        }
        NnavComponent.cart++
      }
      if(title=='compare'){
        if(NnavComponent.compare==0){
          var compare=new CompareList
          compare.userid=this.authservice.getId()
          compare.products=[{productid:prid as any,qty:1,comment:''}]
          this.compareservice.addCompareList(compare).subscribe(res=>{
            console.log(res);
            NnavComponent.compare=res.products.length
            NnavComponent.changestyle()
          },err=>{
            console.log(err);
          })
        }
        else{
          this.compareservice.updateCompareListbyProductId(this.authservice.getId(),prid).subscribe(res=>{
            NnavComponent.compare=res.products.length
            NnavComponent.changestyle()
          },err=>{
            console.log(err);
          })
        }
      }
      else{
        if(NnavComponent.heart==0){
          var wish=new WishList
          wish.userid=this.authservice.getId()
          wish.products=[{productid:prid as any,qty:1,comment:''}]
          console.log(wish);
          this.wishservice.addWishList(wish).subscribe(res=>{
            console.log(res);
            NnavComponent.heart=res.products.length
            NnavComponent.changestyle()
          },err=>{
            console.log(err);
          })
        }
        else{
          this.wishservice.updateWishListbyProductId(this.authservice.getId(),prid).subscribe(res=>{
            NnavComponent.heart=res.products.length
            NnavComponent.changestyle()
          },err=>{
            console.log(err);
          })
        }
      }

    }
    else{
      alert('Pleaze Log In or SignUp.')
    }
  }

    styleprice(discount:number){
      if(discount){
       // console.log(discount);
        return 'text-decoration: line-through;color: #a59c9c;'
      }
      else{
       // console.log(discount);
        return 'margin-bottom: 44px;'
      }
    }
    routeProductId(id:string){
      this.router.navigate(['/product/'+id])
    }
}



