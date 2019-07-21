import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomBookingDashboardComponent } from './room-booking-dashboard.component';

describe('RoomBookingDashboardComponent', () => {
  let component: RoomBookingDashboardComponent;
  let fixture: ComponentFixture<RoomBookingDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomBookingDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomBookingDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
