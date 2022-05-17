import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Auction } from 'src/app/models/auction.component';
import { AuctionService } from 'src/app/service/auction.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'auction-card',
  templateUrl: './auction-card.component.html',
  styleUrls: ['./auction-card.component.css']
})
export class AuctionCardComponent implements OnInit {
  
  auctions: Auction[] = [];
  hours:number = 5;

  constructor(private auctionService: AuctionService) {}

  ngOnInit(): void {
    this.getAllAuctions();
  }

  getAllAuctions() {
    this.auctionService.getAllAuctions().subscribe(
      response => {
        this.auctions = response;
      }
    );
  }

}
