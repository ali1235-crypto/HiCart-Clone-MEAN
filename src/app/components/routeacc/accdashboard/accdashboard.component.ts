import { User } from './../../../models/User';
import { AuthServiceService } from './../../../services/auth-service.service';
import { UsersService } from './../../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeOpen} from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { AcceditComponent } from '../accedit/accedit.component';
import { ProfileComponent } from '../../profile/profile.component';


@Component({
  selector: 'app-accdashboard',
  templateUrl: './accdashboard.component.html',
  styleUrls: ['./accdashboard.component.css']
})
export class AccdashboardComponent implements OnInit {


  faEnvelopeOpen=faEnvelopeOpen
  faUser=faUser
  faHome=faHome
  faCar=faCar

  user=new User
  constructor(private router:Router,private route:ActivatedRoute,private userservice:UsersService,private auth:AuthServiceService) { }

  ngOnInit(): void {
    this.userservice.getUser(this.auth.getId()).subscribe(res=>{
      this.user=res
      console.log(this.user);
    },err=>{
      console.log(err);
    })
  }

  routeChildProfile(index:number){
    if(index==0){window.scrollTo(0,0)
      ProfileComponent.hovernav(1)
      this.router.navigate(['account/edit'],{relativeTo:this.route.parent})}
    else if(index==1){
      ProfileComponent.hovernav(1)
      AcceditComponent.openpass=true
      window.scrollTo(0,739)
      this.router.navigate(['account/edit'],{relativeTo:this.route.parent})}
    else if(index==2){window.scrollTo(0,0)
      ProfileComponent.hovernav(6)
      this.router.navigate(['account/subscription'],{relativeTo:this.route.parent})}
    else if(index==3){window.scrollTo(0,0)
      ProfileComponent.hovernav(2)
      this.router.navigate(['account/address'],{relativeTo:this.route.parent})}
    else if(index==4){window.scrollTo(0,794)
      ProfileComponent.hovernav(2)
        this.router.navigate(['account/address'],{relativeTo:this.route.parent})}

  }

  checkValueUndefined(value:any){
    var obj=new Object(value)
    return Object.values(obj).some(
      firstname => firstname?true:false
     );
  }
}
