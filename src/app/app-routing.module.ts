import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoomBookingDashboardComponent } from './booking/component/room-booking-dashboard/room-booking-dashboard.component';
import { AddBookingComponent } from './booking/component/add-booking/add-booking.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', component: RoomBookingDashboardComponent },
  { path: 'newbooking/:RoomNumber/:checkInDate', component: AddBookingComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
