
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Product } from 'src/app/models/Products';
import { WishList } from '../../../models/WishList';
import { AuthServiceService } from 'src/app/services/auth-service.service';

import { Component, OnInit } from '@angular/core';
import { WishlistserviceService } from 'src/app/services/wishlistservice.service';

@Component({
  selector: 'app-whilelist',
  templateUrl: './whilelist.component.html',
  styleUrls: ['./whilelist.component.css']
})
export class WhilelistComponent implements OnInit {

  qty=new FormControl('')
  comment=new FormControl('')
  formm=new FormGroup({
    'qty':this.qty,
    'comment':this.comment
  })

  WishList=[new WishList]
  constructor(private wishservice:WishlistserviceService,private auth:AuthServiceService
    ,private router:Router) { }

  ngOnInit(): void {
    this.getWishelistes()
  }

  getWishelistes(){
    this.wishservice.getnbofhearts(this.auth.getId()).subscribe(res=>{
      this.WishList=res
      console.log(this.WishList[0]);
    },err=>{
      console.log(err);
    })
  }

  update(i:number){
    var info={}
    if(!this.qty.value){
      info={comment:this.comment.value}

    }
    else if(!this.comment.value){
      info={qty:this.qty.value}
    }
    else{
      info={qty:this.qty.value,comment:this.comment.value}
    }
    this.wishservice.updateWishList(this.auth.getId(),info,i).subscribe(res=>{
      console.log(res);
    },err=>{
      console.log(err);
    })
  }
  edit(id:string){
    this.router.navigate([{outlets:{primary:'product/'+id,nav:'nav'}}])
  }

  addToCart(){
    this.router.navigate(['checkout/cart'])
  }
}
