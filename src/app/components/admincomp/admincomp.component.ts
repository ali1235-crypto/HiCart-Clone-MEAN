import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admincomp',
  templateUrl: './admincomp.component.html',
  styleUrls: ['./admincomp.component.css']
})
export class AdmincompComponent implements OnInit {

  list=['Users','Products','Categories','Offers','Banners','Orders']

  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  rout(nb:number){
    if(nb==0){
      this.router.navigate(['users'],{relativeTo:this.route})
    }
    if(nb==1){
      this.router.navigate(['products'],{relativeTo:this.route})
    }
    if(nb==2){
      this.router.navigate(['categories'],{relativeTo:this.route})
    }
    if(nb==3){
      this.router.navigate(['offers'],{relativeTo:this.route})
    }
    if(nb==4){
      this.router.navigate(['banners'],{relativeTo:this.route})
    }
    if(nb==5){
      this.router.navigate(['orders'],{relativeTo:this.route})
    }
    return ''
  }
}
