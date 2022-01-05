import { FormControl, FormGroup, Validators } from "@angular/forms";

export class ValidAdd {
  form:FormGroup
  firstname:FormControl
  lastname:FormControl
  gender:FormControl
  date:FormControl
  phone: FormControl;
  email: FormControl;
  password: FormControl;
  emu:FormControl
  admin:FormControl
  ca:FormControl
  ua:FormControl
  constructor() {
    this.firstname= new FormControl(
    '',[Validators.required,Validators.pattern(/^[a-z]*$/i)]
    );
    this.lastname= new FormControl(
      '',[Validators.required,Validators.pattern(/^[a-z]*$/i)]
      );
    this.gender=new FormControl('',[Validators.required]);
    this.date=new FormControl('',[Validators.required])
    this.phone=new FormControl('',[Validators.required,Validators.pattern(/^[0-9]*$/)])
    this.email=new FormControl('',[Validators.required,Validators.email]);
    this.password=new FormControl('',[Validators.required,Validators.pattern(/[a-zA-z0-9.-]/g)]);
    this.emu=new FormControl('',[Validators.required])
    this.admin=new FormControl('',[Validators.required])
    this.ca=new FormControl('',[Validators.required])
    this.ua=new FormControl('',[Validators.required])
  this.form=new FormGroup({
      'first':this.firstname,
      'last':this.lastname,
      'gender':this.gender,
      'date':this.date,
      'phone':this.phone,
      'email':this.email,
      'password':this.password,
      'admin':this.admin,
      'emu':this.emu,
      'ca':this.ca,
      'ua':this.ua
    })
  }
}
