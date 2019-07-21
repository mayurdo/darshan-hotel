import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-booking-grid-cell',
  templateUrl: './booking-grid-cell.component.html',
  styleUrls: ['./booking-grid-cell.component.css']
})
export class BookingGridCellComponent implements OnInit {

  constructor() { }

  @Input()
  bookingDetail:any;

  ngOnInit() {
  }

}
