import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'auction-card',
  templateUrl: './auction-card.component.html',
  styleUrls: ['./auction-card.component.css']
})
export class AuctionCardComponent implements OnInit {
  
  auctions:any = [];

  constructor(private http:HttpClient) {}

  modalTitle = '';
  AuctionName = '';


  ngOnInit(): void {
    this.getAuctions();
  }

  getAuctions() {
    this.http.get(environment.AUCTION_API + 'get-all-auctions').subscribe(response => {
      this.auctions = response;
    });
  }
  
  createClick() {

  }

  updateClick(){

  }
}
