import { Injectable } from '@angular/core';

import { Reservation } from '../models/reservation';


@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservations:Reservation[]=[];

constructor(){

  let savedreservation=localStorage.getItem("reservation");

  if(savedreservation!=null){
    this.reservations=JSON.parse( savedreservation);
  }

}

 

  //CRUD OPERATIONS

  getReservations():Reservation[]{
    console.log(this.reservations)
    return this.reservations;
  }

  getReservation(id:string):Reservation| undefined{
    return this.reservations.find(res=>res.id === id);
  }

  addReservation(reservation:Reservation):void{
    reservation.id=JSON.stringify(Math.random()*900);
    this.reservations.push(reservation);

    console.log("Added reservation",this.reservations);

    localStorage.setItem("reservation",JSON.stringify(this.reservations));
  }

  deleteReservation(id:string):void|undefined{
    let index=this.reservations.findIndex(res=>res.id===id)||-1;//if not found return -1

    this.reservations.splice(index,1);
    localStorage.setItem("reservation",JSON.stringify(this.reservations));
  }



  updateReservation(id:string,updateReservation :Reservation):void{
    let index = this.reservations.findIndex(res=> res.id===id);

    this.reservations[index]=updateReservation;
    this.reservations[index].id=id;
    localStorage.setItem("reservation",JSON.stringify(this.reservations));

    console.log("updated sucessfully");
  }


}



