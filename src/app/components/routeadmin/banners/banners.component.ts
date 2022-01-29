import { OfferbannerServiceService } from './../../../services/offerbanner-service.service';
import { BannerOffer } from 'src/app/models/banneroffer';
import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ValidAddBO } from 'ValidAddBO';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.css']
})
export class BannersComponent implements OnInit {

  faPlus=faPlus
  uped="Edit"
  _ID='0'
  readonly=true
  banners=[new BannerOffer()]

  v=new ValidAddBO
  constructor(private boservice:OfferbannerServiceService) { }

  ngOnInit(): void {
    this.getBanners()
  }

  getBanners(){
    this.boservice.getBanners().subscribe(res=>{
      this.banners=res
      console.log(res);
    },err=>{
      console.log(err);
    })
  }
  getBannerId(id:string){
    var bn=(this.banners.find((banner)=>banner._id==id) as BannerOffer)
    this.v.title.setValue(bn.title)
    this.v.path.setValue(bn.path)

  }
  addBanner(banner:BannerOffer){
    this.boservice.addBanner(banner).subscribe(res=>{
      console.log(res);
    },err=>{
      console.log(err);
    })
  }
  editBanner(id:string,banner:BannerOffer){
    this.boservice.editBanner(id,banner).subscribe(res=>{
      console.log(res);
    },err=>{
      console.log(err);
    })
  }
  deleteBanner(id:string){
    this.boservice.deleteBanner(id).subscribe(res=>{
      console.log(res);
    },err=>{
      console.log(err);
    })
  }
  clearInput(){
    this.v.form.reset()
  }
  AddEdit(){
    const bn=new BannerOffer()
    bn.title=this.v.title.value
    bn.path=this.v.path.value


    console.log(bn);
    if(this.uped=="Add"){
      this.addBanner(bn)
    }
    else{
      this.editBanner(this._ID,bn)
    }
  }

}
