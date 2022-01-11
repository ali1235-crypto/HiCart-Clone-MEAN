import { Category } from './../../models/category';
import { CategoryServiceService } from './../../services/category-service.service';
import { Component, OnInit } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faBalanceScale } from '@fortawesome/free-solid-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { Valid } from 'Valid';
import { Login } from 'src/app/models/Login';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { AppComponent } from 'src/app/app.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nnav',
  templateUrl: './nnav.component.html',
  styleUrls: ['./nnav.component.css']
})
export class NnavComponent implements OnInit {

  faSignInAlt=faSignInAlt
  faShoppingCart=faShoppingCart
  faHeart=faHeart
  faBalanceScale=faBalanceScale



  opendelivery=false
  opendeliverydiv=false
  openreturns=false
  openreturnsdiv=false
  opencontact=false
  opencontactdiv=false

  divhover=false

  categroies:Category[]=[new Category()]
  ind=0

  hover=[false,false,false,false,false,false,false,false,false,false,false,false]


  public classReference = AppComponent;

  constructor(private authservice:AuthServiceService,private categoryservice:CategoryServiceService,private router:Router) {
  this.getCategories('')
  }

  ngOnInit(): void {

  }


  getCategories(parent:string){
    this.categoryservice.getCategories(parent).subscribe((res)=>{
      this.categroies=res
      console.log(res)
    })
  }

  clear(){
    setTimeout(() => {
      this.opendelivery=false
      this.opencontact=false
      this.openreturns=false
    }, 70);
  }
  routeProducts(category:string){
    console.log(category);
    this.router.navigate(['/'+category])
  }
  routeProducts2(category:Category,subcategory:string){
    console.log(category);
    this.router.navigate(['/'+category.name+'/'+subcategory])
  }
}
