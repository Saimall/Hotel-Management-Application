import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Reservation } from '../models/reservation';




@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservations:Reservation[]=[];

  private apiurl="http://localhost:3001"; //always sepcificy the base url


  constructor(private http:HttpClient){

  }


  getReservations():Observable< Reservation[]>{
   
    return this.http.get<Reservation[]>(this.apiurl + "/reservations");
  }

  getReservation(id:string):Observable< Reservation| undefined>{
    return this.http.get<Reservation>(this.apiurl+"/reservation/"+id);
  }

  addReservation(reservation:Reservation):Observable<void>{
  return this.http.post<void>(this.apiurl+"/reservation",reservation);
    
  }

  deleteReservation(id:string):Observable< void|undefined>{
    // let index=this.reservations.findIndex(res=>res.id===id)||-1;//if not found return -1

    // this.reservations.splice(index,1);

    return this.http.delete<void>(this.apiurl+"/reservation/"+id);
   
  }



  updateReservation(id:string,updateReservation :Reservation):Observable<void>{
    return this.http.put<void>(this.apiurl+"/reservation/"+id,updateReservation);
    console.log("updated sucessfully");
  }


}



