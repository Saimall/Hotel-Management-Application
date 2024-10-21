import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeModule } from './home/home.module';
import { ReservationModule } from './reservation/reservation.module';



import { provideHttpClient } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ReservationModule,
  
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient() 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
