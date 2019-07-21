import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomBookingDashboardComponent } from './booking/component/room-booking-dashboard/room-booking-dashboard.component';
import { BookingGridCellComponent } from './booking/component/booking-grid-cell/booking-grid-cell.component';
import { AddBookingComponent } from './booking/component/add-booking/add-booking.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomBookingDashboardComponent,
    BookingGridCellComponent,
    AddBookingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
