import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { timer } from "rxjs";

@Component({
  selector: 'countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit, OnDestroy {
  
  countDown:any;
  @Input()
  counter:number = 0;
  tick = 1000;
  ngOnInit() {
    this.counter = (this.counter * 60) * 60
    this.countDown = timer(0, this.tick).subscribe(() => --this.counter);
  }
  ngOnDestroy() {
    this.countDown = null;
  }
}
