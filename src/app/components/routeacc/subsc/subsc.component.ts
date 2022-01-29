import { AuthServiceService } from 'src/app/services/auth-service.service';
import { UsersService } from 'src/app/services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subsc',
  templateUrl: './subsc.component.html',
  styleUrls: ['./subsc.component.css']
})
export class SubscComponent implements OnInit {

  constructor(private userservice:UsersService,private auth:AuthServiceService) { }

  ngOnInit(): void {
  }
save(sbs:string){
  this.userservice.editUser(this.auth.getId(),{emsubscribe:sbs}).subscribe(res=>{
    alert('Email Subscriped Changed Succefelly')
  },err=>{
    console.log(err);
  })
}
}
