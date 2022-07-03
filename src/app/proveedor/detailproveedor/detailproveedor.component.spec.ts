import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailproveedorComponent } from './detailproveedor.component';

describe('DetailproveedorComponent', () => {
  let component: DetailproveedorComponent;
  let fixture: ComponentFixture<DetailproveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailproveedorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailproveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
