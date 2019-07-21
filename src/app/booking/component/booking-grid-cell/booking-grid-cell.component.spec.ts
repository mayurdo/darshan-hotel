import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingGridCellComponent } from './booking-grid-cell.component';

describe('BookingGridCellComponent', () => {
  let component: BookingGridCellComponent;
  let fixture: ComponentFixture<BookingGridCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingGridCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingGridCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
