import { AuthServiceService } from './../../../services/auth-service.service';
import { UsersService } from './../../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { ValidAdress } from 'ValidAddress';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  v=new ValidAdress
  user=new User
  constructor(private userservice:UsersService,private auth:AuthServiceService) { }

  ngOnInit(): void {
    this.userservice.getUser(this.auth.getId()).subscribe(res=>{
      this.user=res
      this.v.firstname.setValue(this.user.addresscontact.firstname)
      this.v.lastname.setValue(this.user.addresscontact.lastname)
      this.v.company.setValue(this.user.addresscontact.company)
      this.v.telephone.setValue(this.user.addresscontact.telephone)
      this.v.fax.setValue(this.user.addresscontact.fax)
      var street=this.user.addresshipping.streetnameno.split(',')
      this.v.streetnameno1.setValue(street[0])
      this.v.streetnameno2.setValue(street[1])
      this.v.stateprovince.setValue(this.user.addresshipping.stateprovince)
      this.v.city.setValue(this.user.addresshipping.city)
      this.v.zip.setValue(this.user.addresshipping.zip)
      this.v.country.setValue(this.user.addresshipping.country)
      this.v.addressnickname.setValue(this.user.addresshipping.addressnickname)
    },err=>{
      console.log(err);
    })
  }

  save(){
    var info:{
      addresscontact:{
        firstname:string
        lastname:string
        company:string
        telephone:string
        fax:string
      }
      addresshipping:{
        streetnameno:string
        stateprovince:string
        city:string
        zip:string
        country:string
        addressnickname:string
      }
    }={addresscontact:{company:'',fax:'',lastname:'',firstname:'',telephone:''}
      ,addresshipping:{addressnickname:'',stateprovince:'',streetnameno:'',city:'',country:'',zip:''}}



    if(this.v.form.valid){
      info.addresscontact.company=this.v.company.value
      info.addresscontact.firstname=this.v.firstname.value
      info.addresscontact.lastname=this.v.lastname.value
      info.addresscontact.telephone=this.v.telephone.value
      info.addresscontact.fax=this.v.fax.value
      info.addresshipping.addressnickname=this.v.addressnickname.value
      info.addresshipping.city=this.v.city.value
      info.addresshipping.country=this.v.country.value
      info.addresshipping.stateprovince=this.v.stateprovince.value
      info.addresshipping.streetnameno=this.v.streetnameno1.value+","+this.v.streetnameno2.value
      info.addresshipping.zip=this.v.zip.value
      console.log(info);
      this.userservice.editUser(this.auth.getId(),info).subscribe(res=>{
        console.log(res);
      },err=>{
        console.log(err);
      })
    }
  }

}
