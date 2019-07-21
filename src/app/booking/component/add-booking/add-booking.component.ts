import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../../service/common.service';
import { StaticDataService } from '../../service/static-data.service';
import { RoomTariff } from '../../models/room-tariff';

@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.css']
})
export class AddBookingComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private datePipe: DatePipe,
    private commonService: CommonService) { }

  bookingForm: FormGroup;
  roomTariff: RoomTariff;

  ngOnInit() {

    this.createAddForm();

    this.activeRoute.params.subscribe(params => {
      console.log(params);
      this.bookingForm.controls.CheckInDate.setValue(params.checkInDate);
      this.bookingForm.controls.RoomNumber.setValue(params.RoomNumber);

      this.setRoomTypeAndTariff(params.RoomNumber);
    })
  }

  setRoomTypeAndTariff(roomNumber: string) {

    let roomDetail = StaticDataService.RoomDetails.find(x => x.RoomNumber.toString() === roomNumber);
    this.bookingForm.controls.RoomType.setValue(roomDetail.RoomType);

    this.commonService.getRoomTariff(roomDetail.RoomTypeId).subscribe(
      data => {
        this.roomTariff = data;
        this.calculateAmountAndPayment();
      },
      err => {
        console.log(err);
      }
    )
  }

  calculateAmountAndPayment() {
    let roomTariffAmount = this.roomTariff.Reception;
    let gst = StaticDataService.getGSTAmount(roomTariffAmount);
    let total = roomTariffAmount + gst;

    this.bookingForm.controls.RoomTariff.setValue(roomTariffAmount);
    this.bookingForm.controls.GST.setValue(gst);
    this.bookingForm.controls.Total.setValue(total);

    // calculate gross total
    let extraBed = this.bookingForm.controls.ExtraBed.value;
    let discount = this.bookingForm.controls.Discount.value;
    let grossTotal = total + extraBed - discount;
    this.bookingForm.controls.GrossTotal.setValue(grossTotal);

    // calculatePayment
    let onlinePayment = this.bookingForm.controls.OnlinePayment.value;
    let swapPayment = this.bookingForm.controls.SwapPayment.value;
    let cashPayment = this.bookingForm.controls.CashPayment.value;
    let otherPayment = this.bookingForm.controls.OtherPayment.value;
    let paidAmount = onlinePayment + swapPayment + cashPayment + otherPayment;
    let balanceAmount = grossTotal - paidAmount;

    this.bookingForm.controls.PaidAmount.setValue(paidAmount);
    this.bookingForm.controls.BalanceAmount.setValue(balanceAmount);




  }

  createAddForm(): void {
    this.bookingForm = this.formBuilder.group({
      Id: [0],
      BookingDate: [this.datePipe.transform(new Date(), 'y-MM-dd'), Validators.required],
      BookingSource: [],
      BookedBy: [],

      CheckInDate: [this.datePipe.transform(new Date(), 'y-MM-dd'), Validators.required],
      RoomNumber: ['', Validators.required],
      RoomType: ['', Validators.required],

      CustName: [],
      CustCity: [],
      CustAdult: [],
      CustChild: [],
      RoomTariff: [],
      GST: [],
      Total: [],
      ExtraBed: [],
      Discount: [],
      GrossTotal: [],
      PaidAmount: [],
      BalanceAmount: [],

      OnlinePayment: [],
      SwapPayment: [],
      CashPayment: [],
      OtherPayment: [],
      PaymentRemark: []
    });
  }

}
