import { CategoryServiceService } from './../../services/category-service.service';
import { ProductServiceService } from './../../services/product-service.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Products';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faStar } from '@fortawesome/free-regular-svg-icons';
import { faBalanceScale } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'AngEcom';

  faShoppingCart=faShoppingCart
  faHeart=faHeart
  faBalanceScale=faBalanceScale
  faStar=faStar
  //categories=['Electronics','Mobiles & Tablets','Fshion','Sports & leisure','Baby & Toys','Beauty','Home & kitchen','Books & Stationery','Liquors','Brand Store','Shop Local']
  banners=['banner1.jpg','banner2.jpg','banner3.jpg']
  immg=[false,false,false]

  offers=['offer1.jpg','offer2.jpg','offer4.jpg','offer1.jpg','offer2.jpg','offer4.jpg','offer1.jpg','offer2.jpg']





//

products!:Product[]


titlep=["CATCH OF THE DAY","CATCH OF THE DAY6"]





constructor(private productservice:ProductServiceService) {
}

getProducts(category:string){
  this.productservice.getProductsByCategory(category).subscribe((res)=>{this.products=res;console.log(this.products)},(err)=>console.log(err))
}



ngOnInit(): void { }


}

