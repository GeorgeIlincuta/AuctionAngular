import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuctionComponent } from './auction/auction.component';
import { LoginComponent } from './form/login/login.component';
import { RegisterComponent } from './form/register/register.component';

import { HttpClientModule } from '@angular/common/http';
import { AuctionCardComponent } from './auction-card/auction-card.component';
import { ForgotComponent } from './form/forgot/forgot.component';

@NgModule({
  declarations: [
    AppComponent,
    AuctionComponent,
    LoginComponent,
    AuctionCardComponent,
    RegisterComponent,
    ForgotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
