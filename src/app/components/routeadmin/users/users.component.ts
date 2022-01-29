import { UsersService } from './../../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Valid } from 'Valid';
import { ValidAdd } from 'ValidAdd';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  faPlus=faPlus
  uped="Edit"
  _ID='0'
  readonly=true
    user=[new User()]

    v=new ValidAdd
  constructor(private users:UsersService) { }



  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(){
    this.users.getUsers().subscribe(res=>{
      this.user=res
      console.log(res);
    },err=>{
      console.log(err);
    })
  }
  getUserId(id:string){
    var us=(this.user.find((user)=>user._id==id) as User)
    this.v.firstname.setValue(us.firstname)
    this.v.lastname.setValue(us.lastname)
    this.v.email.setValue(us.email)
    this.v.gender.setValue(us.gender)
    this.v.password.setValue(us.password)
    this.v.emu.setValue(us.emsubscribe)
    this.v.type.setValue(us.type)
    this.v.admin.setValue(us.isAdmin)
    this.v.phone.setValue(us.mobilenumber)
    this.v.ua.setValue(us.updatedAt)
    this.v.ca.setValue(us.createdAt)
    this.v.date.setValue(us.dateofbirth)
  }
  addUser(user:User){
    this.users.addUser(user).subscribe(res=>{
      console.log(res);
    },err=>{
      console.log(err);
    })
  }
  editUser(id:string,user:User){
    this.users.editUser(id,user).subscribe(res=>{
      console.log(res);
    },err=>{
      console.log(err);
    })
  }
  deleteUser(id:string){
    this.users.deleteUser(id).subscribe(res=>{
      console.log(res);
    },err=>{
      console.log(err);
    })
  }
  clearInput(){
    this.v.form.reset()
  }
  AddEdit(){
    const uss=new User()
    uss.firstname=this.v.firstname.value
    uss.lastname=this.v.lastname.value
    uss.email=this.v.email.value
    uss.gender=this.v.gender.value
    uss.password=this.v.password.value
    uss.emsubscribe=this.v.emu.value
    uss.type=this.v.type.value
    uss.isAdmin=this.v.admin.value
    uss.mobilenumber=this.v.phone.value
    uss.dateofbirth=this.v.date.value
    if(this.uped=="Add"){
      this.addUser(uss)
    }
    else{
      this.editUser(this._ID,uss)
    }
  }
}
