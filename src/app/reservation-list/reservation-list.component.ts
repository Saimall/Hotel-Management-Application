import { Component } from '@angular/core';
import { Reservation } from '../models/reservation';
import { ReservationService } from '../reservation/reservation.service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.css'
})
export class ReservationListComponent {


  reservations: Reservation[] = [];

  //using below the angular injection will inject the angular service using below consturtcor inside reservaytionlistcomponent

  constructor(private reservationservice: ReservationService) {

  }



  ngOnInit(): void {

    this.reservations = this.reservationservice.getReservations();



  }


  onDelete(id: any) {

    console.log("Delet functionlaity");
    console.log(id)
    this.reservations = this.reservations.filter(res => res.id != id);


    console.log("New reservations: ", this.reservations);

    localStorage.setItem("reservations", JSON.stringify(this.reservations));

  }

}