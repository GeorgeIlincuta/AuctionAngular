import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.css']
})
export class AuctionComponent implements OnInit {

  auctions:any = [];

  constructor(private http:HttpClient) {}

  ngOnInit(): void {
    this.getAuctions();
  }

  getAuctions() {
    this.http.get(environment.AUCTION_API + 'get-all-auctions').subscribe(response => {
      this.auctions = response;
    });
  }
  
}
