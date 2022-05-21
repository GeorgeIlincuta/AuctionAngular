import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl,} from '@angular/forms';
import { Router } from '@angular/router';
import { AuctionService } from 'src/app/service/auction.service';

@Component({
  selector: 'auction-modal',
  templateUrl: './auction-modal.component.html',
  styleUrls: ['./auction-modal.component.css']
})
export class AuctionModalComponent implements OnInit {

  public addAuction = this.formBuilder.group({
    title:['',Validators.required],
    description:['',Validators.required],
    bidStartPrice:['',Validators.required],
    bidDuration:['',Validators.required],
    bidBuyingPrice:['',Validators.required],
  })
  
  constructor(
    private formBuilder: FormBuilder,
    private auctionService: AuctionService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    let name = this.addAuction.controls["title"].value;
    let description = this.addAuction.controls["description"].value;
    let bidStart = parseInt(this.addAuction.controls["bidStartPrice"].value);
    let timeLeft = parseInt(this.addAuction.controls["bidDuration"].value);
    let buyPrice = parseInt(this.addAuction.controls["bidBuyingPrice"].value);
    let active = true;
    let lastBid = null;
    let appUserId = 2;
    let appUser = null
    this.addAuction.reset();

    this.auctionService.addAuction(name, description, bidStart, timeLeft, buyPrice, active, lastBid, appUserId, appUser).subscribe((data:any) => {
      console.log("response", data);
    }, error => {
      console.log("error", error)
    })
    window.location.reload()
  }

  get Title(): FormControl {
    return this.addAuction.get('title') as FormControl;
  }
  get Description(): FormControl {
    return this.addAuction.get('description') as FormControl;
  }
  get BidStartPrice(): FormControl {
    return this.addAuction.get('bidStartPrice') as FormControl;
  }
  get BidDuration(): FormControl {
    return this.addAuction.get('bidDuration') as FormControl;
  }
  get BidBuyingPrice(): FormControl {
    return this.addAuction.get('bidBuyingPrice') as FormControl;
  }

}
