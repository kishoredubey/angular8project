import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryGetComponent } from './inventory-get.component';

describe('InventoryGetComponent', () => {
  let component: InventoryGetComponent;
  let fixture: ComponentFixture<InventoryGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
