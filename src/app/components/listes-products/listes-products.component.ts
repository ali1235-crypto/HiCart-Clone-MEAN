import { ProductServiceService } from './../../services/product-service.service';
import { ActivatedRoute } from '@angular/router';
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

  plusbool=[false,false,false]
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

  range1='75'
  range2='10'

  constructor(private Routed:ActivatedRoute,private products:ProductServiceService) { }

  ngOnInit(): void {
    this.Routed.params.subscribe(res=>{
      if(res.category){
        this.category=res.category
      }
      if(res.subcategory){
        this.subcategory=res.subcategory
        if(!res.subbcategory){
          this.getProductsByCategory(this.subcategory,this.page,this.limit,this.fieldname,this.sort)
        }

      }
      if(res.subbcategory){
        this.subbcategory=res.subbcategory
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
      if(this.subbcategory){this.getProductsByCategory(this.subcategory,this.page,this.limit,this.fieldname,this.sort)}
      else if(this.subcategory){this.getProductsByCategory(this.subcategory,this.page,this.limit,this.fieldname,this.sort)}
    }
    changeSelect(){
      if(this.subbcategory){this.getProductsByCategory(this.subcategory,this.page,this.limit,this.fieldname,this.sort)}
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
      field[0].style.left=this.range2+"%"
      field[0].style.right=100-parseInt(this.range1)+"%"
    }
}
