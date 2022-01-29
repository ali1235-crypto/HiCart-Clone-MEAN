import { OfferbannerServiceService } from './../../../services/offerbanner-service.service';
import { Component, OnInit } from '@angular/core';
import { ValidAddBO } from 'ValidAddBO';
import { BannerOffer } from 'src/app/models/banneroffer';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
  faPlus=faPlus
  uped="Edit"
  _ID='0'
  readonly=true
  offers=[new BannerOffer()]

  v=new ValidAddBO
  constructor(private boservice:OfferbannerServiceService) { }

  ngOnInit(): void {
    this.getOffers()
  }

  getOffers(){
    this.boservice.getOffers().subscribe(res=>{
      this.offers=res
      console.log(res);
    },err=>{
      console.log(err);
    })
  }
  getOfferId(id:string){
    var of=(this.offers.find((offer)=>offer._id==id) as BannerOffer)
    this.v.title.setValue(of.title)
    this.v.path.setValue(of.path)

  }
  addOffer(offer:BannerOffer){
    this.boservice.addOffer(offer).subscribe(res=>{
      console.log(res);
    },err=>{
      console.log(err);
    })
  }
  editOffer(id:string,offer:BannerOffer){
    this.boservice.editOffer(id,offer).subscribe(res=>{
      console.log(res);
    },err=>{
      console.log(err);
    })
  }
  deleteOffer(id:string){
    this.boservice.deleteOffer(id).subscribe(res=>{
      console.log(res);
    },err=>{
      console.log(err);
    })
  }
  clearInput(){
    this.v.form.reset()
  }
  AddEdit(){
    const of=new BannerOffer()
    of.title=this.v.title.value
    of.path=this.v.path.value


    console.log(of);
    if(this.uped=="Add"){
      this.addOffer(of)
    }
    else{
      this.editOffer(this._ID,of)
    }
  }

}
