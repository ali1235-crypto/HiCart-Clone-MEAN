import { AuthServiceService } from 'src/app/services/auth-service.service';
import { OrderserviceService } from './../../../services/orderservice.service';
import { Component, OnInit } from '@angular/core';
import { OrderList } from 'src/app/models/OrderList';

@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.component.html',
  styleUrls: ['./myorder.component.css']
})
export class MyorderComponent implements OnInit {

  uped="Edit"
  readonly=true

  orders:OrderList[] | undefined
  constructor(private orderservice:OrderserviceService,private auth:AuthServiceService) { }

  ngOnInit(): void {
    this.getOrders()
  }

  getOrders(){
    this.orderservice.getOrderListBuIdUser(this.auth.getId()).subscribe(res=>{
      console.log(res);
      this.orders=res
      //console.log(this.orders[0].address.addressnickname);
    },err=>{
      console.log(err);
    })
  }

}
