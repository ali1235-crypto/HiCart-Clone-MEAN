import { Component, ContentChildren, OnInit, QueryList, TemplateRef } from '@angular/core';

import { SocialAuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";


import { NgIfContext } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: SocialUser | undefined;
  loggedIn: boolean | undefined;


  list=['Account Dashboard','Account Information','Address Book','My Orders','My Product Reviews','My Wishlist','My Subscriptions','Gift Card','My Wallet','Return Requests']


  constructor(private authService: SocialAuthService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {}


  rout(nb:number){
    if(nb==0){
      this.router.navigate(['account'],{relativeTo:this.route})
    }
    else if(nb==1){
      this.router.navigate(['account/edit'],{relativeTo:this.route})
    }
    else if(nb==2){
      this.router.navigate(['account/address'],{relativeTo:this.route})
    }
    else if(nb==5){
      this.router.navigate(['account/mywhilelist'],{relativeTo:this.route})
    }
    return ''
  }

  hovernav(j:number){
    var listes=document.getElementsByClassName('hover-li')
    for(var i=0;i<listes.length;i++){
      if(i==j){
        listes[i].classList.add('active')
      }
      else{
        listes[i].classList.remove('active')
      }
    }

  }
}
