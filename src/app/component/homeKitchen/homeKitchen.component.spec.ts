import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeKitchenComponent } from './homeKitchen.component';

describe('HomeKitchenComponent', () => {
  let component: HomeKitchenComponent;
  let fixture: ComponentFixture<HomeKitchenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeKitchenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeKitchenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
