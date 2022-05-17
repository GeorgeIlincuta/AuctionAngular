import { Component, OnInit } from '@angular/core';
import { Auction } from 'src/app/models/auction.component';
import { AuctionService } from 'src/app/service/auction.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  auctions: Auction[] = [];

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
