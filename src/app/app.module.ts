import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';

import { AuctionComponent } from './pages/auction/auction.component';
import { LoginComponent } from './form/login/login.component';
import { RegisterComponent } from './form/register/register.component';
import { AuctionCardComponent } from './sections/auction-card/auction-card.component';
import { ForgotComponent } from './form/forgot/forgot.component';
import { AuctionModalComponent } from './form/auction-modal/auction-modal.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MenuComponent } from './sections/menu/menu.component';
import { CountdownComponent } from './sections/countdown/countdown.component';
import { FormatTimePipe } from './pipes/format-time.pipe';

export function tokenGetter() {
  return localStorage.getItem("jwt");
}

@NgModule({
  declarations: [
    AppComponent,
    AuctionComponent,
    LoginComponent,
    AuctionCardComponent,
    RegisterComponent,
    ForgotComponent,
    AuctionModalComponent,
    DashboardComponent,
    MenuComponent,
    CountdownComponent,
    FormatTimePipe 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:5001"],
        disallowedRoutes: []
      }

    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
