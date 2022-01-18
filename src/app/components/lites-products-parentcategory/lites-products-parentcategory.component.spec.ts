import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LitesProductsParentcategoryComponent } from './lites-products-parentcategory.component';

describe('LitesProductsParentcategoryComponent', () => {
  let component: LitesProductsParentcategoryComponent;
  let fixture: ComponentFixture<LitesProductsParentcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LitesProductsParentcategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LitesProductsParentcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
