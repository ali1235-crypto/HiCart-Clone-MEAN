import { Form, FormControl, FormGroup, Validators } from "@angular/forms";

export class ValidAddBO {
  form:FormGroup
  path:FormControl
  title:FormControl


  constructor() {

    this.title=new FormControl('',[Validators.required]);
    this.path=new FormControl('',[Validators.required])



  this.form=new FormGroup({
      'title':this.title,
      'path':this.path,
    })
  }
}
