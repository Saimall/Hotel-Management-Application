import { Component } from '@angular/core';
import { Reservation } from '../models/reservation';
import { ReservationService } from '../reservation/reservation.service';

import { ActivatedRoute } from '@angular/router';

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

    this.reservationservice.getReservations().subscribe(reservations=>{
      this.reservations = reservations;
    }
    );




  }


  onDelete(id: any) {

    console.log("Delet functionlaity");
    console.log(id)
    this.reservationservice.deleteReservation(id).subscribe(()=>{
      console.log("Reservation is proceeding");
    })
  }

 

}
