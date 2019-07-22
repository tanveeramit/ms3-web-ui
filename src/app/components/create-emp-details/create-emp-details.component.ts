import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { FormGroup, NgForm } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';



@Component({
  selector: 'app-create-emp-details',
  templateUrl: './create-emp-details.component.html',
  styleUrls: ['./create-emp-details.component.css']
})
export class CreateEmpDetailsComponent implements OnInit {

  public webForm: FormGroup;
  public createProductObj: any = {
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
  public successText = {message: '', id : ''}



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

  constructor(private apiService: AppService) {

  }
  bsConfig: Partial<BsDatepickerConfig>;

  ngOnInit() {    
    this.bsConfig = Object.assign({}, { containerClass: this.colorTheme });
    this.myDateValue = new Date();
    this.createProductObj.Gender = this.genderOptions[0].value
  }


  public createNewPR(form : NgForm) {
    const obj = {
      "Identification": {
        "FirstName": this.createProductObj.FirstName,
        "LastName": this.createProductObj.LastName,
        "DOB": this.createProductObj.DOB,
        "Gender": this.createProductObj.Gender,
        "Title": this.createProductObj.Title
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
    this.apiService.sendPostRequest('http://localhost:8088/api/ms3/contact', obj).subscribe(res => {
      console.log(res);
      this.successText = {message: 'Successfully created with id', id : res.userId}
      form.reset();
    })
  }

}
