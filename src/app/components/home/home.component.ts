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


titlep=["Refrigerators","Wine Coolers"]



lengthimgfigure=0
interval!:any
control=0

products=[[new Product]]
counter=0

constructor(private productservice:ProductServiceService ,private authservice:AuthServiceService
  ,private wishservice:WishlistserviceService,private router:Router,private boservice:OfferbannerServiceService) {
}

getProducts(category:string){
  this.productservice.getProductsByCategory(category).subscribe((res)=>{this.products=res;console.log(this.products)},(err)=>console.log(err))
}



ngOnInit(): void {
  const figure=document.querySelector<HTMLElement>('.banners figure')
  if(figure){


    this.interval=setInterval(() => {

      figure.style.left=this.control+"px"
      this.control-=1349
      if(this.control==-(figure.children.length)*1349){
        this.control=0
      }

    }, 7000);
  }


  this.products.splice(0,1)
          console.log('object',this.products);
          this.titlep.forEach((value,index)=>{
              this.productservice.getProductsByCategory(value,'1','8').subscribe(res=>{
                this.products[index]=res.products
                const productsClass=document.getElementsByClassName('products') as HTMLCollectionOf<HTMLElement>
                if(productsClass[index])productsClass[index].style.width=209*this.products[index].length+6*(this.products[index].length-1)+"px"

              })
          })
  window.addEventListener("mouseup", () => {
    this.isPressedDown = false;
  });
  window.addEventListener("mousemove",(e)=>{this.sectionArrowMove(e,this.indexdiv)})
  this.boservice.getBanners().subscribe(res=>{
    this.banners=res
    if(figure)figure.style.width=this.banners.length*1349+"px"
      this.lengthimgfigure =this.banners.length
  },err=>{
    console.log(err);
  })
  this.boservice.getOffers().subscribe(res=>{
    this.offers=res
  },err=>{
    console.log(err);
  })
}
animateBannerImg(i:number){
  const figure=document.querySelector<HTMLElement>('.banners figure')
  if(figure){
    this.control=-i*1349
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
  const products=document.getElementsByClassName('products') as HTMLCollectionOf<HTMLElement>
  const products_items=document.getElementsByClassName('product-item') as HTMLCollectionOf<HTMLElement>
  if(products[this.indexdiv]&&products_items){
    if (!this.isPressedDown) {
      //console.log('kkk');
      this.lastpoint=0
    if((parseInt(window.getComputedStyle(products[this.indexdiv]).left)<=215&&parseInt(window.getComputedStyle(products[this.indexdiv]).left)>=0)||(parseInt(window.getComputedStyle(products[this.indexdiv]).left)<=-((products_items.length/products.length)-6)*215)){
      if(parseInt(window.getComputedStyle(products[this.indexdiv]).left)<=-(products[this.indexdiv].childElementCount-6)*215){
        //console.log('object');
        products[this.indexdiv].style.left=-(products[this.indexdiv].childElementCount-6)*215+'px'
      }
      else{
        products[this.indexdiv].style.left='0px'
      }
  }
  else if(parseInt(window.getComputedStyle(products[this.indexdiv]).left)%215!=0){
    if(parseInt(window.getComputedStyle(products[this.indexdiv]).left)>215){
      products[this.indexdiv].style.left="0px"
    }
    var reste=Math.round(parseInt(window.getComputedStyle(products[this.indexdiv]).left)/215)
    products[this.indexdiv].style.left=reste*215+'px'
    console.log('offbject');
  }

  }
    else{console.log('oooo');
      e.preventDefault();

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
  const productsservice=document.getElementsByClassName('productsservice') as HTMLCollectionOf<HTMLElement>
  const productsserviceitems=document.querySelectorAll('.productsservice .product-item')
  if(productsservice){
    //console.log(productsserviceitems);
      this.counter++
      if(this.counter==1)this.counter=6-productsserviceitems.length/2
      productsservice[index].style.left=this.counter*(215)+"px"
    }
}
nextButton2(index:number){
  const productsservice=document.getElementsByClassName('productsservice') as HTMLCollectionOf<HTMLElement>
  const productsserviceitems=document.querySelectorAll('.productsservice .product-item')
    if(productsservice){
      //console.log(productsservice);
      this.counter--
      if(-this.counter==productsserviceitems.length/2-5)this.counter=0
      productsservice[index].style.left=this.counter*(215)+"px"

    }}


    addCartWishCompare(prid:string,title:string){
      if(this.authservice.isLoggedIn()){
        if(title=='cart'){
          NnavComponent.cart++
        }
        if(title=='compare'){
          NnavComponent.compare++
        }
        else{
          this.wishservice.updateWishListbyProductId(this.authservice.getId(),prid).subscribe(res=>{
            NnavComponent.heart=res.products.length
          },err=>{
            console.log(err);
          })
        }
        NnavComponent.changestyle()
      }
      else{
        console.log('no l');
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



