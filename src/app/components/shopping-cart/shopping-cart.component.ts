import { NnavComponent } from './../nnav/nnav.component';
import { WishlistserviceService } from 'src/app/services/wishlistservice.service';
import { CartserviceService } from './../../services/cartservice.service';
import { Product } from 'src/app/models/Products';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { OrderserviceService } from './../../services/orderservice.service';
import { Component, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { OrderList } from 'src/app/models/OrderList';
import { CartList } from 'src/app/models/CartList';
import { WishList } from 'src/app/models/WishList';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  faTrash=faTrash
  faShare=faShare

  update=false

  carts:CartList=new CartList
  constructor(private cartservice:CartserviceService,private authservice:AuthServiceService,private wishservice:WishlistserviceService) { }

  ngOnInit(): void {
    this.cartservice.getnbofcarts(this.authservice.getId()).subscribe(res=>{
    this.carts=res[0]
    console.log(this.carts);
    },err=>{
      console.log(err);
    })
  }

  updateCart(qty:string,index:number){
    this.cartservice.updateCartList(this.authservice.getId(),{qty:qty},index).subscribe(res=>{
      location.reload()
    },err=>{
      console.log(err);
    })
  }
  addWishList(prid:Product,qty:string){
    if(NnavComponent.heart==0){
      var wish=new WishList
      wish.userid=this.authservice.getId()
      var qtyn=parseInt(qty)
      wish.products=[{productid:prid,qty:qtyn,comment:'Pleaze Enter Your Comment...'}]
      this.wishservice.addWishList(wish).subscribe(RES=>{
        alert('add succefull')
      })
    }
    else{
      this.wishservice.updateWishListbyProductId(this.authservice.getId(),prid._id).subscribe(res=>{
        alert('add succeful')
      },err=>{
        console.log(err);
      })
    }

  }
  delete(){

    this.cartservice.delete(this.authservice.getId()).subscribe(res=>{
      location.reload()
    },err=>{
      console.log(err);
    })
  }
}
