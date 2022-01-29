import { Form, FormControl, FormGroup, Validators } from "@angular/forms";

export class ValidAddC {
  form:FormGroup
  name:FormControl
  path:FormControl
  parent:FormControl
  imglogo:FormControl
  imgbanner: FormControl;
  childsid: FormControl;

  constructor() {

    this.name=new FormControl('',[Validators.required]);
    this.path=new FormControl('',[Validators.required])
    this.parent=new FormControl('')
    this.imglogo=new FormControl('')
    this.imgbanner=new FormControl('',[Validators.required]);
    this.childsid=new FormControl('');


  this.form=new FormGroup({
      'name':this.name,
      'path':this.path,
      'parent':this.parent,
      'imglogo':this.imglogo,
      'imgbanner':this.imgbanner,
      'childsid':this.childsid
    })
  }
}
