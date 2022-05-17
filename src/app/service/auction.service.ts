import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Auction } from '../models/auction.component';

@Injectable({
  providedIn: 'root'
})
export class AuctionService {

  constructor(private http: HttpClient) { }

  // Get all auctions
  getAllAuctions(): Observable<Auction[]> {

    return this.http.get<Auction[]>(environment.AUCTION_API + 'get-all-auctions');
  }
}
