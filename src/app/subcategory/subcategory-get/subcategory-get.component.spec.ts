import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoryGetComponent } from './subcategory-get.component';

describe('SubcategoryGetComponent', () => {
  let component: SubcategoryGetComponent;
  let fixture: ComponentFixture<SubcategoryGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcategoryGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcategoryGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
