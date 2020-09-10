import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {ApplyLoanService} from  '../apply-loan.service';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-applyloan',
  templateUrl: './applyloan.component.html',
  styleUrls: ['./applyloan.component.css']
})
export class ApplyloanComponent implements OnInit {
  minDate: Date;
  response:any;
  roi:any;
  
  constructor( private loanService:ApplyLoanService) {

    this.minDate = new Date();
   }

  ngOnInit(): void {
    
     
     //console.log(this.response);
     //this.display();
     //this.getInterestRates("personal");
     //console.log(this.roi);
     
  }

  display()
  {
    console.log(this.response);

  }

  async getInterestRates(loanType:string)
  {
    await this.loanService.getInterestRates().toPromise().then(data=>{
      this.response=data
    });

      this.roi=this.response.find(e=>e.type==loanType).rate;
      console.log(this.roi);

  }

  form = new FormGroup({
    'loanType': new FormControl('', Validators.required),
    'loanAmount':new FormControl('', Validators.required),
    'rateOfInterest':new FormControl({value:'',disabled:true}, Validators.required),
    'loanDuration':new FormControl('', Validators.required),
    'applyDate':new FormControl('', Validators.required),
    'issueDate':new FormControl('', [Validators.required]),
    'courseFee':new FormControl('', Validators.required),
    'courseName':new FormControl('', Validators.required),
    'annualIncome': new FormControl('',Validators.required),
    'companyName': new FormControl('',Validators.required),
    'fatherName': new FormControl('',Validators.required),
    'occupation': new FormControl('',Validators.required),
    'designation': new FormControl('',Validators.required),
    'ytotalExperience': new FormControl('',Validators.required),
    'yexperiencewithCurrentCompany': new FormControl('',Validators.required),
    'totalExperience': new FormControl('',Validators.required),
    'experiencewithCurrentCompany': new FormControl('',Validators.required),
    'rationCard': new FormControl('',Validators.required),
    //'picker':new FormControl('',Validators.required)
  });

  

  submit(){

    let formValue = { ...this.form.value };

    for (let prop in formValue) {
    if (!formValue[prop]) {
      delete formValue[prop];
    }
  }
    console.log(formValue);
  }

  onOptionsSelected(loan:string)
  {
    this.getInterestRates(loan);
    this.form.get('loanType').setValue(loan);
  }
}
