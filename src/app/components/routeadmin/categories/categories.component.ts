import { Category } from './../../../models/category';
import { CategoryServiceService } from './../../../services/category-service.service';
import { Component, OnInit } from '@angular/core';
import { ValidAddC } from 'ValidAddC';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  faPlus=faPlus
  uped="Edit"
  _ID='0'
  readonly=true
  categories=[new Category()]

  v=new ValidAddC

  constructor(private categoryservices:CategoryServiceService) { }

  ngOnInit(): void {
    this.getcategories()
  }
  getcategories(){
    this.categoryservices.getAllCategories().subscribe(res=>{
      this.categories=res
      console.log(res);
    },err=>{
      console.log(err);
    })
  }
  getCategoryId(id:string){
    var ca=(this.categories.find((category)=>category._id==id) as Category)
    this.v.name.setValue(ca.name)
    this.v.path.setValue(ca.path)
    this.v.parent.setValue(ca.parent)
    this.v.imglogo.setValue(ca.imglogo)
    this.v.imgbanner.setValue(ca.imgbanner)
    this.v.childsid.setValue(ca.childsId)
  }
  addCategory(category:Category){
    this.categoryservices.addCategory(category).subscribe(res=>{
      console.log(res);
    },err=>{
      console.log(err);
    })
  }
  editCategory(id:string,category:Category){
    this.categoryservices.editCategory(id,category).subscribe(res=>{
      console.log(res);
    },err=>{
      console.log(err);
    })
  }
  deleteCategory(id:string){
    this.categoryservices.deleteCategory(id).subscribe(res=>{
      console.log(res);
    },err=>{
      console.log(err);
    })
  }
  clearInput(){
    this.v.form.reset()
  }
  AddEdit(){
    const ca=new Category()
    ca.name=this.v.name.value
    ca.path=this.v.path.value
    ca.parent=this.v.parent.value
    ca.imglogo=this.v.imglogo.value
    if(this.v.childsid.value!='')ca.childsId=this.v.childsid.value.split(',')
    ca.imgbanner=this.v.imgbanner.value

    console.log(ca);
    if(this.uped=="Add"){
      this.addCategory(ca)
    }
    else{
      this.editCategory(this._ID,ca)
    }
  }
}
