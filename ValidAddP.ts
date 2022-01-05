import { Form, FormControl, FormGroup, Validators } from "@angular/forms";

export class ValidAddP {
  form:FormGroup
  title:FormControl
  desc:FormControl
  price:FormControl
  img:FormControl
  imgs: FormControl;
  soldby: FormControl;
  category: FormControl;
  availability:FormControl
  capacity:FormControl
  type:FormControl
  productcode:FormControl
  brand: FormControl;
  color: FormControl;
  dimensions: FormControl;
  features: FormControl;
  size: FormControl;

  constructor() {
    this.title= new FormControl(
    '',[Validators.required]
    );
    this.desc= new FormControl(
      '',[Validators.required]
      );
    this.price=new FormControl('',[Validators.required,Validators.pattern(/^[0-9]*$/)]);
    this.img=new FormControl('',[Validators.required])
    this.imgs=new FormControl('',[Validators.required])
    this.size=new FormControl('',[Validators.required])
    this.soldby=new FormControl('',[Validators.required]);
    this.category=new FormControl('',[Validators.required]);
    this.availability=new FormControl('',[Validators.required])
    this.capacity=new FormControl('')
    this.type=new FormControl('',[Validators.required])
    this.productcode=new FormControl('',[Validators.required])
    this.brand=new FormControl('',[Validators.required])
    this.color=new FormControl('',[Validators.required])
    this.dimensions=new FormControl('',[Validators.required])
    this.features=new FormControl('',[Validators.required])

  this.form=new FormGroup({
      'title':this.title,
      'desc':this.desc,
      'price':this.price,
      'img':this.img,
      'imgs':this.imgs,
      'size':this.size,
      'soldby':this.soldby,
      'category':this.category,
      'availability':this.availability,
      'capacity':this.capacity,
      'type':this.type,
      'productcode':this.productcode,
      'brand':this.brand,
      'color':this.color,
      'dimensions':this.dimensions,
      'features':this.features
    })
  }
}
