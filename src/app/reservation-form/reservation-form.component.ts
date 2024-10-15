import { Component, OnInit } from '@angular/core';

import { FormGroup,FormBuilder,Validators} from '@angular/forms';
import { Reservation } from '../models/reservation';

import { ReservationService } from '../reservation/reservation.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css'
})
export class ReservationFormComponent implements OnInit{

  reservationForm : FormGroup = new FormGroup({});

  constructor(private formbuilder:FormBuilder,private reservationservice:ReservationService,private router:Router){
    //Now above will use angular dependecy injection and injects reservicationservice into this component
    

  }

  //By above we are injecting the formbuilder into reservationform compoent.Basically this formbuilder is used to group the formcontrollersnames given in html
  //below method is called ngOnInit when user click on add new resrvation. or when this compoent is invoked
  
  
  ngOnInit():void{

    this.reservationForm = this.formbuilder.group({
      //here we give formcontroller name defined in formgroup which is binded to form in html

      checkInDate:['',Validators.required] ,//this make sures that checkInDate formController need to be valid i.e first it can be empty and after it is reuqired. IF one is invalid then entire form becaomes invalid
    checkOutDate:['',Validators.required],
    guestName:['',Validators.required],
    guestEmail:['',[Validators.required,Validators.email]], //we can mention mutiple validtors in an array. we can also use max length and all validtaos option
    roomNumber:['',Validators.required]
    })

    
    //The names above must be same as the formcontrollername given in html

  }

  onSubmit(){

    //using below we are checking wehther the form is valid or not.so we use formbuilder to take all the formcontrols and group them and check whther they arevalid or not .

    if(this.reservationForm.valid){
      console.log("valid");
      let reservation:Reservation=this.reservationForm.value;
      this.reservationservice.addReservation(reservation);

      this.router.navigate(["/list"]); // every package that is imported to use that instances we need to use angular dependence injection using constructor

    }
    else{
      console.log("invalid");
    }
  }

}
