import { CartserviceService } from './../../services/cartservice.service';
import { CompareserviceService } from './../../services/compareservice.service';
import { CompareList } from './../../models/CompareList';
import { WishList } from './../../models/WishList';
import { CategoryServiceService } from './../../services/category-service.service';
import { Product } from 'src/app/models/Products';
import { NnavComponent } from './../nnav/nnav.component';
import { AppComponent } from 'src/app/app.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faBalanceScale } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHouseDamage } from '@fortawesome/free-solid-svg-icons';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { Category } from 'src/app/models/category';
import { WishlistserviceService } from 'src/app/services/wishlistservice.service';


@Component({
  selector: 'app-lites-products-parentcategory',
  templateUrl: './lites-products-parentcategory.component.html',
  styleUrls: ['./lites-products-parentcategory.component.css']
})
export class LitesProductsParentcategoryComponent implements OnInit {

  category=''
  titlep=['']

  faHouseDamage=faHouseDamage
  faHeart=faHeart
  faShoppingCart=faShoppingCart
  faBalanceScale=faBalanceScale
  faStar=faStar

  counter=0

  clientx=0

  iduser=''

  products=[[new Product]]

  imgbanner=""

  childs:Category[]=[]
  constructor(private Routed:ActivatedRoute,private authservice:AuthServiceService
    ,private wishservice:WishlistserviceService,private productsservice:ProductServiceService
    ,private router:Router,private categoryservice:CategoryServiceService,private compareservice:CompareserviceService
    ,private cartservice:CartserviceService) {

    }

  ngOnInit(): void {
    this.Routed.params.subscribe(res=>{
      if(res.category){
        this.category=res.category
        this.categoryservice.getCategories('',this.category).subscribe(res=>{
          if(res.length==0)this.router.navigate([{outlets:{primary:'home',nav:'nav'}}])
          this.imgbanner=res[0].imgbanner
        },err=>{
          console.log(err);
          this.router.navigate([{outlets:{primary:'home',nav:'nav'}}])
        })
        this.categoryservice.getCategories(this.category).subscribe(res=>{

          this.childs=res

          this.titlep.splice(0,1)
          this.childs.forEach((value,index)=>{
            this.titlep.push(value.name)
          })

          this.products.splice(0,1)
          console.log('object',this.products);
          this.titlep.forEach((value,index)=>{
              this.productsservice.getProductsByCategory(value,'1','8').subscribe(res=>{
                this.products[index]=res.products
                console.log(this.products[index]);
                const productsClass=document.getElementsByClassName('products') as HTMLCollectionOf<HTMLElement>
                if(productsClass[index])productsClass[index].style.width=209*this.products[index].length+6*(this.products[index].length-1)+"px"

              })
          })

        })

      }})
      setTimeout(() => {
      const figure=document.querySelector<HTMLElement>('figure')
      //console.log('object');
      if(figure){
        figure.style.width=figure.childElementCount*293.75+35*(figure.childElementCount-1)+"px"
      }}, 300);
      window.addEventListener("mouseup", () => {
        this.isPressedDown = false;
      });
      window.addEventListener("mousemove",(e)=>{this.sectionArrowMove(e,this.indexdiv)})





  }
  prevButton(){
    const figure=document.querySelector('figure')
    const images=document.querySelectorAll('figure img')
      if(figure){
        this.counter++
        if(this.counter==1)this.counter=4-images.length
        figure.style.left=this.counter*(293.75+35)+"px"
      }
  }
  nextButton(){
    const imagediv=document.querySelector('figure')
    const images=document.querySelectorAll('figure img')
      if(imagediv){
        this.counter--
        if(-this.counter==images.length-3)this.counter=0
        imagediv.style.left=this.counter*(293.75+35)+"px"
      }
  }
  prevButton2(index:number){
    const productsservice=document.getElementsByClassName('productsservice') as HTMLCollectionOf<HTMLElement>
    const productsserviceitems=document.querySelectorAll('.productsservice .product-item')
    if(productsservice){
      console.log(productsserviceitems);
        this.counter++
        if(this.counter==1)this.counter=6-productsserviceitems.length/2
        productsservice[index].style.left=this.counter*(215)+"px"
      }
  }
  nextButton2(index:number){
    const productsservice=document.getElementsByClassName('productsservice') as HTMLCollectionOf<HTMLElement>
    const productsserviceitems=document.querySelectorAll('.productsservice .product-item')
      if(productsservice){console.log(productsservice);
        this.counter--
        if(-this.counter==productsserviceitems.length/2-5)this.counter=0
        productsservice[index].style.left=this.counter*(215)+"px"

      }}

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
  animateEnterup(i:number){const parentproductsservice=document.getElementsByClassName('parentproductsservice') as HTMLCollectionOf<HTMLElement>
    if(parentproductsservice[i])parentproductsservice[i].style.cursor='grab'
  }
  sectionArrowMove(e:any,i:number){
    const products=document.getElementsByClassName('products') as HTMLCollectionOf<HTMLElement>
    const productsservice_items=document.getElementsByClassName('product-item') as HTMLCollectionOf<HTMLElement>
    if(products[this.indexdiv]&&productsservice_items){
      if (!this.isPressedDown) {
        //console.log('kkk');
        this.lastpoint=0
      if((parseInt(window.getComputedStyle(products[this.indexdiv]).left)<=215&&parseInt(window.getComputedStyle(products[this.indexdiv]).left)>=0)||(parseInt(window.getComputedStyle(products[this.indexdiv]).left)<=-((productsservice_items.length/products.length)-6)*215)){
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


addCartWishCompare(prid:string,title:string){
  if(this.authservice.isLoggedIn()){
    if(title=='cart'){
      if(NnavComponent.cart==0){
        var wish=new WishList
        wish.userid=this.authservice.getId()
        wish.products=[{productid:prid as any,qty:1,comment:''}]
        this.cartservice.addCartList(wish).subscribe(res=>{
          console.log(res);
        },err=>{
          console.log(err);
        })
      }
      else{
        this.cartservice.updateCartList(this.authservice.getId(),prid).subscribe(res=>{
          NnavComponent.cart=res.products.length
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
        },err=>{
          console.log(err);
        })
      }
      else{
        this.compareservice.updateCompareList(this.authservice.getId(),prid).subscribe(res=>{
          NnavComponent.compare=res.products.length
        },err=>{
          console.log(err);
        })
      }
      NnavComponent.compare++
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
        },err=>{
          console.log(err);
        })
      }
      else{
        this.wishservice.updateWishListbyProductId(this.authservice.getId(),prid).subscribe(res=>{
          NnavComponent.heart=res.products.length
        },err=>{
          console.log(err);
        })
      }
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
