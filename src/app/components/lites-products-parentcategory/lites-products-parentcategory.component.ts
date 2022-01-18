import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faBalanceScale } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHouseDamage } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-lites-products-parentcategory',
  templateUrl: './lites-products-parentcategory.component.html',
  styleUrls: ['./lites-products-parentcategory.component.css']
})
export class LitesProductsParentcategoryComponent implements OnInit {

  category=''
  titlep=["CATCH OF THE DAY","CATCH OF THE DAY6"]

  faHouseDamage=faHouseDamage
  faHeart=faHeart
  faShoppingCart=faShoppingCart
  faBalanceScale=faBalanceScale
  faStar=faStar

  counter=0

  clientx=0

  constructor(private Routed:ActivatedRoute) { }

  ngOnInit(): void {
    this.Routed.params.subscribe(res=>{
      if(res.category){
        this.category=res.category
      }})
      const imagediv=document.querySelector('figure')
      if(imagediv)imagediv.style.width=5*293.75+35*4+"px"
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
    const products=document.getElementsByClassName('products') as HTMLCollectionOf<HTMLElement>
    const productsitems=document.querySelectorAll('.products .product-item')
    if(products){
      console.log(productsitems);
        this.counter++
        if(this.counter==1)this.counter=6-productsitems.length/2
        products[index].style.left=this.counter*(215)+"px"
      }
  }
  nextButton2(index:number){
    const products=document.getElementsByClassName('products') as HTMLCollectionOf<HTMLElement>
    const productsitems=document.querySelectorAll('.products .product-item')
      if(products){console.log(products);
        this.counter--
        if(-this.counter==productsitems.length/2-5)this.counter=0
        products[index].style.left=this.counter*(215)+"px"

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
  animateEnterup(i:number){const parentproducts=document.getElementsByClassName('parentproducts') as HTMLCollectionOf<HTMLElement>
    if(parentproducts[i])parentproducts[i].style.cursor='grab'
  }
  sectionArrowMove(e:any,i:number){
    const products=document.getElementsByClassName('products') as HTMLCollectionOf<HTMLElement>
    const products_items=document.getElementsByClassName('product-item') as HTMLCollectionOf<HTMLElement>
    if(products[this.indexdiv]&&products_items){
      if (!this.isPressedDown) {
        this.lastpoint=0
      if((parseInt(window.getComputedStyle(products[this.indexdiv]).left)<=215&&parseInt(window.getComputedStyle(products[this.indexdiv]).left)>=0)||(parseInt(window.getComputedStyle(products[this.indexdiv]).left)<=-((products_items.length/products.length)-6)*215)){
        if(parseInt(window.getComputedStyle(products[this.indexdiv]).left)<=-((products_items.length/products.length)-6)*215){
          //console.log('object');
          products[this.indexdiv].style.left=-((products_items.length/products.length)-6)*215+'px'
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
      //console.log('offbject');
    }

    }
      else{
        e.preventDefault();

    if(parseInt(window.getComputedStyle(products[this.indexdiv]).left)<=215&&parseInt(window.getComputedStyle(products[this.indexdiv]).left)>=-((products_items.length/products.length)-5)*215){

      products[this.indexdiv].style.left = `${this.leftproducts+e.clientX-this.startx}px`;
      //console.log("1");
    }
    else if(parseInt(window.getComputedStyle(products[this.indexdiv]).left)>215&&this.lastpoint>e.clientX-this.startx||parseInt(window.getComputedStyle(products[this.indexdiv]).left)<-((products_items.length/products.length)-5)*215&&this.lastpoint<e.clientX-this.startx){
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
}}
