import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaticDataService {

  constructor() { }

  public static get BaseServiceUrl(): string {
    return "http://localhost:49445/api/";
    //return "http://darshanservices.pujaprasad.in/api/";
  }

  static getGSTAmount(tariffAmount: number) {

    if (tariffAmount < 1000) {
      return 0;
    }
    if (tariffAmount < 2500) {
      return tariffAmount * 0.12;
    }

    return tariffAmount * 0.18;
  }

  // Room Details 
  public static RoomDetails =
    [
      {
        RoomNumber: 101,
        RoomTypeId: 8,
        RoomType: 'Tourist Hall-5 Bed'
      },
      {
        RoomNumber: 102,
        RoomTypeId: 7,
        RoomType: 'Standard Room-3 Bed'
      },
      {
        RoomNumber: 103,
        RoomTypeId: 7,
        RoomType: 'Standard Room-3 Bed'
      },
      {
        RoomNumber: 104,
        RoomTypeId: 5,
        RoomType: 'Delux Room-2 Bed'
      },
      {
        RoomNumber: 105,
        RoomTypeId: 6,
        RoomType: 'Delux Room-3 Bed'
      },
      {
        RoomNumber: 106,
        RoomTypeId: 6,
        RoomType: 'Delux Room-3 Bed'
      },
    ]
    // Room Details End
}
