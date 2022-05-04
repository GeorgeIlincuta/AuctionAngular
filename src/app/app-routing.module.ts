import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuctionComponent } from './auction/auction.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path:'', component:LoginComponent},
  { path:'auctions', component:AuctionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
