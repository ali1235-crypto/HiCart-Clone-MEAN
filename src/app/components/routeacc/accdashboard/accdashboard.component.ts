import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeOpen} from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons';


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


  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  openaccinfo(){
    this.router.navigate(['account/edit'],{relativeTo:this.route.parent})
  }
}
