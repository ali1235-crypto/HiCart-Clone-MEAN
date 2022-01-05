import { FormControl, FormGroup, Validators } from "@angular/forms";

export class Valid {
  form:FormGroup
  firstname:FormControl
  lastname:FormControl
  gender:FormControl
  dateyear:FormControl
  datemonth:FormControl
  dateday:FormControl
  phone: FormControl;
  email: FormControl;
  password: FormControl;
  confirmpassword:FormControl
  accept:FormControl
  constructor() {
    this.firstname= new FormControl(
    '',[Validators.required,Validators.pattern(/^[a-z]*$/i)]
    );
    this.lastname= new FormControl(
      '',[Validators.required,Validators.pattern(/^[a-z]*$/i)]
      );
    this.gender=new FormControl('',[Validators.required]);
    this.dateyear=new FormControl('',[Validators.required,Validators.pattern(/^[0-9]*$/)])
    this.datemonth=new FormControl('',[Validators.required])
    this.dateday=new FormControl('',[Validators.required,Validators.pattern(/^[1-9]*$/i)])
    this.phone=new FormControl('',[Validators.required,Validators.pattern(/^[0-9]*$/)])
    this.email=new FormControl('',[Validators.required,Validators.email]);
    this.password=new FormControl('',[Validators.required,Validators.pattern(/[a-zA-z0-9.-]/g)]);
    this.confirmpassword=new FormControl('',[Validators.required])
    this.accept=new FormControl('')
  this.form=new FormGroup({
      'first':this.firstname,
      'last':this.lastname,
      'gender':this.gender,
      'dateyear':this.dateyear,
      'datemonth':this.datemonth,
      'dateday':this.dateday,
      'phone':this.phone,
      'email':this.email,
      'password':this.password,
      'confirmpassword':this.confirmpassword,
      'accept':this.accept
    })
  }
}
