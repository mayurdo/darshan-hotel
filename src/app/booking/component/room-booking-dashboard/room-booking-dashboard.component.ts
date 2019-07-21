import { Component, OnInit, ModuleWithComponentFactories } from '@angular/core';
import { StaticDataService } from '../../service/static-data.service';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { BookingService } from '../../service/booking.service';

@Component({
  selector: 'app-room-booking-dashboard',
  templateUrl: './room-booking-dashboard.component.html',
  styleUrls: ['./room-booking-dashboard.component.css'],
  providers: [StaticDataService, BookingService]
})
export class RoomBookingDashboardComponent implements OnInit {

  constructor(private staticDataService: StaticDataService,
    private bookingService: BookingService,
    private router: Router) { }

  roomDetails: any[];
  dateList: moment.Moment[];
  weekStartDate: moment.Moment;
  weekEndDate: moment.Moment;
  bookings: any[] = [];

  ngOnInit() {
    this.roomDetails = StaticDataService.RoomDetails;
    this.loadBookingDetails(moment());
  }

  loadBookingDetails(startDate: moment.Moment) {
    this.weekStartDate = startDate;
    this.weekEndDate = moment(startDate).add(6, 'day');

    this.bookingService.getBookingDetails(this.weekStartDate, this.weekEndDate).subscribe(
      data => {
        this.bookings = data;
        console.log(this.bookings);

        this.dateList = [];

        for (let i = 0; i < 7; i++) {
          const date = moment(startDate).add(i, 'day');
          this.dateList.push(date);
        }
      },
      err => {
        console.log(err);
      }
    );
  }


  getWeekDayName(date: moment.Moment): string {
    return moment.localeData().weekdays()[date.weekday()];
  }

  goNextWeek() {
    const nextWeekStartDate = moment(this.weekStartDate).add(7, 'day');
    this.loadBookingDetails(nextWeekStartDate);
  }

  goPriviousWeek() {
    const priviousWeekStartDate = moment(this.weekStartDate).subtract(7, 'day');
    this.loadBookingDetails(priviousWeekStartDate);
  }

  goToAddBooking(room:any,date:moment.Moment){

    console.log(room);
    this.router.navigate(['/newbooking/'+room.RoomNumber+'/'+date.format('YYYY-MM-DD')]);

  }

  getBookingDetail(room: any, date: moment.Moment): any {
    const booking = this.bookings.filter(x => x.RoomNumber === room.RoomNumber
      && moment(x.CheckInDate).format('YYYY-MM-DD') === date.format('YYYY-MM-DD'));

    return booking.length > 0 ? booking[0] : '';
  } 

}
