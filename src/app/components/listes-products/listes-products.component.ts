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

  plusbool=false

  category=''
  subcategory=''
  subbcategory=''

  productss=[new Product()]

  constructor(private Routed:ActivatedRoute,private products:ProductServiceService) { }

  ngOnInit(): void {
    this.Routed.params.subscribe(res=>{
      if(res.category){
        this.category=res.category
      }
      if(res.subcategory){
        this.subcategory=res.subcategory
      }
      if(res.subbcategory){
        this.subbcategory=res.subbcategory
      }
    })
    this.getProductsByCategory(this.subbcategory)
  }

  changeIcon():IconDefinition{
    if(this.plusbool){return faMinus}
    return faPlus
  }

  getProductsByCategory(category:string){
    this.products.getProductsByCategory(category).subscribe(res=>{
      console.log(res);
      this.productss=res.products
      console.log(this.productss);
    },err=>{
      console.log(err);
    })}

}
