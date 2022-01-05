import { ProductServiceService } from './../../../services/product-service.service';
import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ValidAddP } from 'ValidAddP';
import { Product } from 'src/app/models/Products';
import { INT_TYPE } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  faPlus=faPlus
  uped="Edit"
  _ID='0'
  readonly=true
  productss=[new Product()]

  v=new ValidAddP
  constructor(private products:ProductServiceService) { }



  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){
    this.products.getProducts().subscribe(res=>{
      this.productss=res
      console.log(res);
    },err=>{
      console.log(err);
    })
  }
  getProductId(id:string){
    var pr=(this.productss.find((product)=>product._id==id) as Product)
    this.v.title.setValue(pr.title)
    this.v.desc.setValue(pr.desc)
    this.v.price.setValue(pr.price)
    this.v.img.setValue(pr.img)
    this.v.imgs.setValue(pr.imgs)
    this.v.size.setValue(pr.size)
    this.v.soldby.setValue(pr.soldby)
    this.v.category.setValue(pr.category)
    this.v.availability.setValue(pr.availability)
    this.v.capacity.setValue(pr.capacity)
    this.v.type.setValue(pr.type)
    this.v.productcode.setValue(pr.specification.productcode)
    this.v.brand.setValue(pr.specification.brand)
    this.v.color.setValue(pr.specification.color)
    this.v.dimensions.setValue(pr.specification.dimensions)
    this.v.features.setValue(pr.specification.features)
  }
  addProduct(product:Product){
    this.products.addProduct(product).subscribe(res=>{
      console.log(res);
    },err=>{
      console.log(err);
    })
  }
  editProduct(id:string,product:Product){
    this.products.editProduct(id,product).subscribe(res=>{
      console.log(res);
    },err=>{
      console.log(err);
    })
  }
  deleteProduct(id:string){
    this.products.deleteProduct(id).subscribe(res=>{
      console.log(res);
    },err=>{
      console.log(err);
    })
  }
  clearInput(){
    this.v.form.reset()
  }
  AddEdit(){
    const pr=new Product()
    pr.title=this.v.title.value
    pr.desc=this.v.desc.value
    pr.price=+this.v.price.value
    pr.img=this.v.img.value
    pr.imgs=this.v.imgs.value
    pr.size=this.v.size.value
    pr.soldby=this.v.soldby.value
    pr.category=this.v.category.value
    pr.availability=(this.v.availability.value =="true");
    pr.capacity=this.v.capacity.value
    pr.type=this.v.type.value
    pr.specification={
      productcode:this.v.productcode.value,
      brand:this.v.brand.value,
      color:this.v.color.value,
      dimensions:this.v.dimensions.value,
      features:this.v.features.value
  }
    console.log(pr);
    if(this.uped=="Add"){
      this.addProduct(pr)
    }
    else{
      this.editProduct(this._ID,pr)
    }
  }
}
