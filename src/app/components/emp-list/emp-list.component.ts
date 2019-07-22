import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  @Output() sendData = new EventEmitter();

  public employeeList: any = {};
  public userId: any = '';
  public showContent = false;

  public baseURL = 'http://localhost:8088/api/ms3/contact'; /* Base Url*/

  constructor(private apiService: AppService, private router: Router) { }

  ngOnInit() {
  }

  public getEmpDetails() {

    // if(this.userId){
    //   this.showContent = true;

    //    this.employeeList = {
    //   "Identification": {
    //     "FirstName": "Bob",
    //     "LastName": "Frederick",
    //     "DOB": "06/21/1980",
    //     "Gender": "M",
    //     "Title": "Manager"
    //   },
    //   "Address": [{
    //     "type": "home",
    //     "number": 1234,
    //     "street": "blah blah St",
    //     "Unit": "1 a",
    //     "City": "Somewhere",
    //     "State": "WV",
    //     "zipcode": "12345"
    //   }],
    //   "Communication": [{
    //     "type": "email",
    //     "value": "bfe@sample.com",
    //     "preferred": "true"
    //   },
    //   {
    //     "type": "cell",
    //     "value": "304-555-8282"
    //   }
    //   ]
    // }
    // }
    const url: any = `${this.baseURL}/${this.userId}`;
    this.apiService.sendGetRequest(url).subscribe(res => {
      console.log(res);
      this.employeeList = res;
      this.showContent = true;
    })
  }
  public removeDetails() {
    if (this.userId) {
      const url: any = `${this.baseURL}/${this.userId}`;
      this.apiService.sendDeleteRequest(url).subscribe(res => { })
    }
  }
}
