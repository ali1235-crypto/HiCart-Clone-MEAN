import { AuthServiceService } from 'src/app/services/auth-service.service';
import { CartserviceService } from './../../services/cartservice.service';
import { CompareserviceService } from './../../services/compareservice.service';
import { WishlistserviceService } from 'src/app/services/wishlistservice.service';
import { CategoryServiceService } from './../../services/category-service.service';
import { ProductServiceService } from './../../services/product-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { faHouseDamage, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faBalanceScale } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Product } from 'src/app/models/Products';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { NnavComponent } from '../nnav/nnav.component';
import { WishList } from 'src/app/models/WishList';
import { CompareList } from 'src/app/models/CompareList';
import { CartList } from 'src/app/models/CartList';

@Component({
  selector: 'app-listes-products',
  templateUrl: './listes-products.component.html',
  styleUrls: ['./listes-products.component.css']
})
export class ListesProductsComponent implements OnInit {

  faStar=faStar
  faHeart=faHeart
  faBalanceScale=faBalanceScale
  faShoppingCart=faShoppingCart
  faHouseDamage=faHouseDamage
  faPlus=faPlus
  faMinus=faMinus
  faArrowUp=faArrowUp

  plusbool=[false,false,false,false]
  cat=true

  category=''
  subcategory=''
  subbcategory=''

  productss=[new Product()]
  filter=[[{_id:'',total:0}]]
  total=0
  limit='20'
  page='1'
  nbpages=0
  fieldname='price'
  sort='1'

  list_pages=[1,2,3,4]
  indexleftreight=1

  range1='80000000'
  range2='10000000'

  imgbanner=""

  constructor(private Routed:ActivatedRoute,private products:ProductServiceService,private router:Router,private categoryservice:CategoryServiceService
    ,private wishservice:WishlistserviceService,private compareservice:CompareserviceService,private cartservice:CartserviceService,private authservice:AuthServiceService) { }

  ngOnInit(): void {
    this.Routed.params.subscribe(res=>{
      if(res.category){
        this.category=res.category
        this.categoryservice.getCategories('',this.category).subscribe(res=>{

        },err=>{
          console.log(err);
          this.router.navigate([{outlets:{primary:'home',nav:'nav'}}])
        })
      }
      if(res.subcategory){
        this.subcategory=res.subcategory
        this.categoryservice.getCategories('',this.subcategory).subscribe(res=>{
          this.imgbanner=res[0].imgbanner
        },err=>{
          console.log(err);
          this.router.navigate([{outlets:{primary:'home',nav:'nav'}}])
        })
        if(!res.subbcategory){
          this.getProductsByCategory(this.subcategory,this.page,this.limit,this.fieldname,this.sort)
        }

      }
      if(res.subbcategory){
        this.subbcategory=res.subbcategory
        this.categoryservice.getCategories('',this.subbcategory).subscribe(res=>{

        },err=>{
          console.log(err);
          this.router.navigate([{outlets:{primary:'home',nav:'nav'}}])
        })
        this.getProductsByCategory(this.subbcategory,this.page,this.limit,this.fieldname,this.sort)
      }
    })
  }

  changeIcon(i:number):IconDefinition{
    if(this.plusbool[i]){return faMinus}
    return faPlus
  }

  getProductsByCategory(category:string,page: string,limit: string,fieldname:string='price',sort:string='1'){
    this.products.getProductsByCategory(category,page,limit,fieldname,sort).subscribe(res=>{
      //console.log(res);
      this.productss=res.products
      this.filter=res.filter
      this.total=res.total[0].totalProductsLen
      this.nbpages=8

      if(this.nbpages<4){
        this.list_pages.splice(0,4)
        for(var i=1;i<=this.nbpages;i++){
          this.list_pages.push(i)
        }
      }

      if(this.filter[0].length==1&&this.filter[0][0]._id==this.subbcategory){
        this.cat=false
      }
      console.log(res);
      console.log(this.filter);
      console.log(this.productss);
    },err=>{
      console.log(err);
    })}
    getPage(nb:number){
      this.page=nb.toString()
      const lis=document.getElementsByClassName('li-pages')
      console.log(lis);
      for(var i=0;i<lis.length;i++){
        lis[i].classList.remove('li-pages-selected')
      }
      const lastelement=this.list_pages[this.list_pages.length-1]
      const index=this.list_pages.indexOf(nb)
      console.log(index);
      console.log(lis[index]);
      lis[index].classList.add('li-pages-selected')
      if(index>1&&lastelement!=this.nbpages){
        this.list_pages.splice(0,1)
        this.list_pages.push(lastelement+1)
      }
      else if(this.list_pages.indexOf(2)!=1&&this.list_pages.indexOf(1)!=0){
        this.list_pages.splice(this.list_pages.length-1,1)
        this.list_pages.unshift(this.list_pages[0]-1)
      }
      if(this.subbcategory){this.getProductsByCategory(this.subbcategory,this.page,this.limit,this.fieldname,this.sort)}
      else if(this.subcategory){this.getProductsByCategory(this.subcategory,this.page,this.limit,this.fieldname,this.sort)}
    }
    changeSelect(){
      if(this.subbcategory){this.getProductsByCategory(this.subbcategory,this.page,this.limit,this.fieldname,this.sort)}
      else if(this.subcategory){this.getProductsByCategory(this.subcategory,this.page,this.limit,this.fieldname,this.sort)}
    }
    showingUntil(){
      return (+this.limit*+this.page)>this.total?this.total:(+this.limit*+this.page)
    }
    toggleAscDesc(){
      if(this.sort=='1'){
        this.sort='-1'
      }
      else if(this.sort=='-1'){
        this.sort='1'
      }
      this.changeSelect()
    }
    range(){
      const field=document.getElementsByClassName('field') as HTMLCollectionOf<HTMLElement>
      const slider=document.querySelectorAll<HTMLElement>('input[type="range"]::-webkit-slider-thumb')
      field[0].style.left=parseInt(this.range2)/1000000+"%"
      field[0].style.right=100-parseInt(this.range1)/1000000+"%"
      if(slider[0]){
        //if(parseInt(slider[0].style.left)==parseInt(slider[0].style.left)-1){
          console.log('object');
        //}
      }
    }


  styleprice(discount:number){
    if(discount){
      console.log(discount);
      return 'text-decoration: line-through;color: #a59c9c;'
    }
    else{
      console.log(discount);
      return 'margin-bottom: 44px;'
    }
  }
  routeProductId(id:string){
    this.router.navigate(['/product/'+id])
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
          },err=>{
            console.log(err);
          })
        }
        else{
          this.cartservice.updateCartList(this.authservice.getId(),prid,index).subscribe(res=>{
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
            NnavComponent.compare=res.products.length
          },err=>{
            console.log(err);
          })
        }
        else{
          this.compareservice.updateCompareListbyProductId(this.authservice.getId(),prid).subscribe(res=>{
            NnavComponent.compare=res.products.length
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
      alert('Pleaze Log In or SignUp.')
    }
  }
}
