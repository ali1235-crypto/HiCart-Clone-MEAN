import { AuthServiceService } from 'src/app/services/auth-service.service';
import { OrderserviceService } from './../../../services/orderservice.service';
import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { OrderList } from 'src/app/models/OrderList';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  faPlus=faPlus
  uped="Edit"
  readonly=true

  orders:OrderList[] | undefined

  constructor(private orderservice:OrderserviceService,private auth:AuthServiceService) { }

  ngOnInit(): void {
    this.getOrders()
  }

  getOrders(){
    this.orderservice.getOrderLists().subscribe(res=>{
      console.log(res);
      this.orders=res
     // console.log(this.orders[0].address.addressnickname);
    },err=>{
      console.log(err);
    })
  }

}
