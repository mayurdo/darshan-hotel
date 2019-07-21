import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";

import { Observable } from 'rxjs';
import * as moment from 'moment';
import { StaticDataService } from './static-data.service';


@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http:HttpClient) { }

  ServiceUrl: string = StaticDataService.BaseServiceUrl + "BookingApi";

  getBookingDetails(startDate: moment.Moment, endDate: moment.Moment) : Observable<any[]>{
    const url=this.ServiceUrl+'/'+"GetBookingByDate"+'/'+startDate.format('YYYY-MM-DD')+'/'+endDate.format('YYYY-MM-DD');
    return this.http.get<any[]>(url);
  }

  getBookingDetailsDammy() {
    return [
      {
        RoomNo: 101,
        RoomType: 'Tourist Hall-5 Bed',
        CheckInDate: '12/07/2019',
        CustName: 'Mayur Dongre',
        BookingSource: 'Reception',
        Balance: 200,
        ActionStatus:'New Booking'
      },
      {
        RoomNo: 104,
        RoomType: 'Delux Room-2 Bed',
        CheckInDate: '15/07/2019',
        CustName: 'Suraj Patil',
        BookingSource: 'ClearTrip',
        Balance: 200,
        ActionStatus:'New Booking'
      },
      {
        RoomNo: 105,
        RoomType: 'Delux Room-3 Bed',
        CheckInDate: '13/07/2019',
        CustName: '',
        BookingSource: 'Reception',
        ActionStatus:'Blocked'
      }
    ]
  }
}
