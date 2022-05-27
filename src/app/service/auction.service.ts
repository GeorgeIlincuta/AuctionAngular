import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Auction } from '../models/auction.component';

// const httpOptions = {
//   headers: new HttpHeaders({
//     Authorization: 'Bearer ' + JSON.parse(JSON.stringify(localStorage.getItem('jwt')!)).token
//   })
// }

@Injectable({
  providedIn: 'root'
})
export class AuctionService {

  constructor(private http: HttpClient) { }

  // Get all auctions
  getAllAuctions(): Observable<Auction[]> {
    return this.http.get<Auction[]>(environment.AUCTION_API + 'get-all-auctions');
  }

  addAuction(title:string, description:string, bidStartPrice:number, bidDuration:number, bidBuyingPrice:number,
    active:boolean) {  
    const body = {
      title:title,
      description:description,
      bidStartPrice:bidStartPrice,
      bidDuration:bidDuration,
      bidBuyingPrice:bidBuyingPrice,
      active:active
    }
    return this.http.post(environment.AUCTION_API + 'add-auction', body)
  }
}
