import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update-emp-details',
  templateUrl: './update-emp-details.component.html',
  styleUrls: ['./update-emp-details.component.css']
})
export class UpdateEmpDetailsComponent implements OnInit {

  public baseURL = 'http://localhost:8088/api/ms3/contact'; /* Base Url*/

  public webForm: FormGroup;
  public successText: any = {message: ' '};
  public userId: any;

  public createProductObj: any = {
    "Identification": {
      "FirstName": " ",
      "LastName": " ",
      "DOB": " ",
      "Gender":" ",
      "Title": " "
    },
    "Address": [{
      "type": " ",
      "number": " ",
      "street": " ",
      "Unit": " ",
      "City": " ",
      "State": " ",
      "zipcode": " "
    }],
    "Communication": [{
      "type": " ",
      "value": " ",
      "preferred": " "
    }]
  };

  public myDateValue: Date;
  public colorTheme = 'theme-blue';
  
  public genderOptions = [
    {
        "title": "Male",
        "value": "M",
    },
    {
        "title": "Female",
        "value": "F"
    },
    ]

    
  constructor(private apiService: AppService, private route: ActivatedRoute, private router: Router) {
    this.route.paramMap.subscribe(params => {
      this.userId = params.get('id')
    });
  }
  bsConfig: Partial<BsDatepickerConfig>;

  ngOnInit() {
    this.bsConfig = Object.assign({}, { containerClass: this.colorTheme });
    this.myDateValue = new Date();
    this.getEmpDetails();   
   
  }
  
  public getEmpDetails() {


    // const empData = {
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
    // };
    const url: any = `${this.baseURL}/${this.userId}`;

    this.apiService.sendGetRequest(url).subscribe(res => {
      const empData = res || {}
      this.createProductObj = {
        "Identification": {
          "FirstName": empData.Identification.FirstName,
          "LastName": empData.Identification.LastName,
          "DOB": empData.Identification.DOB,
          "Gender": empData.Identification.Gender,
          "Title": empData.Identification.Title
        },
        "Address": {
          "type": empData.Address[0].type,
          "number": empData.Address[0].number,
          "street": empData.Address[0].street,
          "Unit": empData.Address[0].Unit,
          "City": empData.Address[0].City,
          "State": empData.Address[0].State,
          "zipcode":empData.Address[0].zipcode
        },
        "Communication": {
          "type": empData.Communication[0].type,
          "value": empData.Communication[0].value,
          "preferred": empData.Communication[0].preferred
        }
      };
    })
  } 
  public updateDetails(){
    const url: any = `${this.baseURL}/${this.userId}`; 
    const obj = {
      "Identification": {
        "FirstName": this.createProductObj.Identification.FirstName,
        "LastName": this.createProductObj.Identification.LastName,
        "DOB": this.createProductObj.Identification.DOB,
        "Gender": this.createProductObj.Identification.Gender,
        "Title": this.createProductObj.Identification.Title
      },
      "Address": [{
        "type": this.createProductObj.Address.type,
        "number": this.createProductObj.Address.number,
        "street": this.createProductObj.Address.street,
        "Unit": this.createProductObj.Address.Unit,
        "City": this.createProductObj.Address.City,
        "State": this.createProductObj.Address.State,
        "zipcode": this.createProductObj.Address.zipcode
      }],
      "Communication": [{
        "type": this.createProductObj.Communication.type,
        "value": this.createProductObj.Communication.value,
        "preferred": this.createProductObj.Communication.preferred
      }]
    }
    this.apiService.sendPutRequest(url, obj).subscribe(res => {
      this.successText.message = res.status || '';
      this.router.navigate(['/home']);
    })
  }
}
