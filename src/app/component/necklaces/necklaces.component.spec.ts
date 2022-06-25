import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NecklacesComponent } from './necklaces.component';

describe('NecklacesComponent', () => {
  let component: NecklacesComponent;
  let fixture: ComponentFixture<NecklacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NecklacesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NecklacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
