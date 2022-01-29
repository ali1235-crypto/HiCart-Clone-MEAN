import { FormControl, FormGroup, Validators } from "@angular/forms";

export class ValidEditUser {
  form:FormGroup
  firstname:FormControl
  lastname:FormControl
  dateofbirth:FormControl
  email:FormControl
  currentpas:FormControl
  newpass: FormControl;
  confirmpass: FormControl;

  constructor() {
    this.firstname= new FormControl(
    '',[Validators.required,Validators.pattern(/^[a-z]*$/i)]
    );
    this.lastname= new FormControl(
      '',[Validators.required,Validators.pattern(/^[a-z]*$/i)]
      );
    this.email=new FormControl('',[Validators.email]);
    this.dateofbirth=new FormControl('',[Validators.required])
    this.currentpas=new FormControl('',[Validators.required])
    this.newpass=new FormControl('',[Validators.required])
    this.confirmpass=new FormControl('',[Validators.required])

  this.form=new FormGroup({
      'first':this.firstname,
      'last':this.lastname,
      'email':this.email,
      'dateofbirth':this.dateofbirth,
      'currentpass':this.currentpas,
      'newpass':this.newpass,
      'confirmpass':this.confirmpass,
    })
  }
}
