import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateproveedorComponent } from './createproveedor.component';

describe('CreateproveedorComponent', () => {
  let component: CreateproveedorComponent;
  let fixture: ComponentFixture<CreateproveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateproveedorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateproveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
