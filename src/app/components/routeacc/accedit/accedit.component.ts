import { User } from './../../../models/User';
import { Component, OnInit } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { UsersService } from 'src/app/services/users.service';
import { ValidEditUser } from 'ValidEditUser';

@Component({
  selector: 'app-accedit',
  templateUrl: './accedit.component.html',
  styleUrls: ['./accedit.component.css']
})
export class AcceditComponent implements OnInit {

  static openpass=false
  classRef=AcceditComponent

  faCheck=faCheck

  v=new ValidEditUser
  user=new User
  constructor(private userservice:UsersService,private auth:AuthServiceService) { }


  ngOnInit(): void {
    this.userservice.getUser(this.auth.getId()).subscribe(res=>{
      console.log(res);
      this.user=res
      this.v.firstname.setValue(this.user.firstname)
      this.v.lastname.setValue(this.user.lastname)
      this.v.email.setValue(this.user.email)
      this.v.dateofbirth.setValue(this.user.dateofbirth.substring(0,10))
    },err=>{
      console.log(err);
    })
  }

  save(){
    var info={}
    if(this.v.firstname.valid&&this.v.lastname.valid&&this.v.email.valid&&this.v.dateofbirth.valid&&!this.classRef.openpass){
      info={
        firstname:this.v.firstname,
        lastname:this.v.lastname,
        email:this.v.email,
        dateofbirth:this.v.dateofbirth
      }
      console.log(info);
    }
    else if(this.v.currentpas.valid&&this.v.newpass.valid&&this.v.confirmpass.valid&&(this.v.newpass.value==this.v.confirmpass.value)&&this.classRef.openpass){
      this.auth.checkPassword(this.auth.getId(),this.v.currentpas.value).subscribe(res=>{
        console.log(res);
        if(info){
          info={
            firstname:this.v.firstname,
          lastname:this.v.lastname,
          email:this.v.email,
          dateofbirth:this.v.dateofbirth,
            password:this.v.newpass.value
          }
          this.userservice.editUser(this.auth.getId(),info).subscribe(res=>{
            console.log(res);
          },err=>{
            console.log(err);
          })
        }
        else{
          info={
            password:this.v.newpass.value
          }
        }
        this.userservice.editUser(this.auth.getId(),info).subscribe(res=>{
          console.log(res);
        },err=>{
          console.log(err);
        })
      },err=>{
        console.log(err);
      })
    }
    else if(this.v.form.valid){
      console.log('object',this.v.currentpas.valid&&this.v.newpass.valid&&this.v.confirmpass.valid);
    }

  }

}
