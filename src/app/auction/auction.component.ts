import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.css']
})
export class AuctionComponent implements OnInit {

  constructor(private http:HttpClient) {
    this.getData().subscribe(data => {
      console.warn(data);
    });
   }

  auctions:any=[];


  modalTitle = "";
  EmployeeId = 0;
  EmployeeName = "";
  Department = "";
  DateOfJoining = "";


  ngOnInit(): void {
    this.test()
  }

  getData() {
    let url="https://localhost:5001/api/Auction/get-all-auctions";
    return this.http.get(url);
  }
  refreshList() {
    this.http.get<any>('https://localhost:5001/api/Auction/get-all-auctions').subscribe(data => {
      this.auctions=data;
    });
  }
  test() {
    console.log(this.auctions);
  }

  editClick(emp:any){
    this.modalTitle = "Edit Employee";
    this.EmployeeId = emp.EmployeeId;
    this.EmployeeName = emp.EmployeeName;
    this.Department = emp.Department;
    this.DateOfJoining = emp.DateOfJoining;
  }

  deleteClick(id:any){
    if(confirm('Are you sure?')){
      this.http.delete('https://localhost:5001/api/Auction/get-all-auctions/'+id).subscribe(res => {
        alert(res.toString());
        this.refreshList();
      });
    }
  }
}
