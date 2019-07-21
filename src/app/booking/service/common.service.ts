import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";

import { Observable } from 'rxjs';
import { StaticDataService } from './static-data.service';
import { RoomTariff } from '../models/room-tariff';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) {
    this.setRoomTariffs();
  }

  ServiceUrl: string = StaticDataService.BaseServiceUrl;


  private _roomTariffs: RoomTariff[];
  public get roomTariffs(): RoomTariff[] {
    return this._roomTariffs;
  }

  setRoomTariffs() {

    const url = this.ServiceUrl + '/' + 'RoomTariffApi';
    this.http.get<RoomTariff[]>(url).subscribe(
      data => {
        this._roomTariffs = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  getRoomTariff(roomTypeId: number): Observable<RoomTariff> {

    const url = this.ServiceUrl + '/RoomTariffApi/' + roomTypeId;
    return this.http.get<RoomTariff>(url);
  }

}
