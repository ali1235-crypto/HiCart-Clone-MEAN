import { ProductServiceService } from './../../services/product-service.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { faHouseDamage } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faBalanceScale } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { Product } from 'src/app/models/Products';


@Component({
  selector: 'app-productinfo',
  templateUrl: './productinfo.component.html',
  styleUrls: ['./productinfo.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ProductinfoComponent implements OnInit {

  faHouseDamage=faHouseDamage
  faStar=faStar
  faHeart=faHeart
  faBalanceScale=faBalanceScale
  faPlus=faPlus
  faMinus=faMinus
  faShoppingCart=faShoppingCart


  desc=true
  spec=false
  review=false


  data = {
    "VERSION": "2006-10-27.a",
    "JOBNAME": "EXEC_",
    "JOBHOST": "Test",
  };

  product=new Product()

  constructor(private Route:ActivatedRoute,private products:ProductServiceService) { }

  ngOnInit(): void {
    this.Route.params.subscribe(res=>{
      const id=res.id
      this.products.getProductsById(id).subscribe(res=>{
        this.product=res
        var img0=this.product.img
        var imgs=this.product.imgs
        this.product.imgs=[img0].concat(imgs) as [string]
        const imagediv=document.querySelector('figure')
        if(imagediv)imagediv.style.width=this.product.imgs.length*460+"px"
      },err=>{
        console.log(err);
      })
    })
  }



getTableDate(){
  const table=document.getElementById('table-spec')
    var s=""
    Object.entries(this.product.specification).forEach(function([key,value]) {
      if(value)s+="<tr><td class>"+key+"</td><td>"+value+"</td></tr>"
    })
    if(table)table.innerHTML=s
}
deleteTableData(){
  const table=document.getElementById('table-spec')
  if(table)table.innerHTML=""
}
getTitle(){
  if(this.desc){
    return 'DESCRIPTION'
  }
  else if(this.review){
    return 'REVIEWS'
  }
  return 'SPECIFICATIONS'
}
imageSlider(){
  const imagediv=document.querySelector('figure')
  if(imagediv)imagediv.style.left=-100+"%"
}
}
