import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

   aFormGroup!: FormGroup
  siteKey="6LeyAhYeAAAAABC3x-tJMO-qvT8fKPinkDTENpqd"

  faFacebookF=faFacebookF
  faTwitter=faTwitter
  faYoutube=faYoutube
  faInstagram=faInstagram
  faLinkedinIn=faLinkedinIn

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
  }

}
