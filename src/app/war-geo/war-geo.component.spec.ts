import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarGeoComponent } from './war-geo.component';

describe('WarGeoComponent', () => {
  let component: WarGeoComponent;
  let fixture: ComponentFixture<WarGeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WarGeoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WarGeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
