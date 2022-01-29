import { FormControl, FormGroup, Validators } from "@angular/forms";

export class ValidAdress {
  form:FormGroup
  firstname:FormControl
  lastname:FormControl
  company:FormControl
  telephone:FormControl
  fax:FormControl
  streetnameno1: FormControl;
  streetnameno2: FormControl;
  stateprovince: FormControl;
  city: FormControl;
  zip: FormControl;
  country:FormControl
  addressnickname:FormControl
  constructor() {
    this.firstname= new FormControl(
    '',[Validators.required,Validators.pattern(/^[a-z]*$/i)]
    );
    this.lastname= new FormControl(
      '',[Validators.required,Validators.pattern(/^[a-z]*$/i)]
      );
    this.company=new FormControl('');
    this.telephone=new FormControl('',[Validators.required,Validators.pattern(/^[0-9]*$/)])
    this.fax=new FormControl('')
    this.streetnameno1=new FormControl('',[Validators.required])
    this.streetnameno2=new FormControl('')
    this.stateprovince=new FormControl('',[Validators.required])
    this.city=new FormControl('',[Validators.required]);
    this.zip=new FormControl('');
    this.country=new FormControl('',[Validators.required])
    this.addressnickname=new FormControl('',[Validators.required])
  this.form=new FormGroup({
      'first':this.firstname,
      'last':this.lastname,
      'company':this.company,
      'telephone':this.telephone,
      'fax':this.fax,
      'streetnameno1':this.streetnameno1,
      'streetnameno2':this.streetnameno2,
      'stateprovince':this.stateprovince,
      'city':this.city,
      'zip':this.zip,
      'country':this.country,
      'addressnickname':this.addressnickname
    })
  }
}
