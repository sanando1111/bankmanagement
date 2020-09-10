import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = 'http://localhost:8080/serverApi'
  initialDeposit: number;
  accountHolderName: string;

  constructor(private http: HttpClient) {
  }

  customers: Customer[] = [
    {
      'id': 1,
      'username': 'Aritra',
      'password': 'Chaterjee',
      'intialdeposit': 100,
      'accountholderName': 'Aritra Chaterjee'
    },
    {
      'id': 2,
      'username': 'Sanando',
      'password': 'Chakraborty',
      'intialdeposit': 200,
      'accountholderName': 'Sanando Chakraborty'

    },
    {
      'id': 3,
      'username': 'sailesh',
      'password': 'gor',
      'intialdeposit': 300,
      'accountholderName': 'Sailesh Gor'
    },

  ]



  validateLogin(customer: Customer): any {
    // in real time there will be separate service call to the given service URL    
    console.log("we are in validateLogin unction");
    var retVal = false;
    for (let c of this.customers) {
      if (c.username == customer.username && c.password == customer.password) {
        //Below two variables are used in applyloan module section and must be shared once the user logged in
        this.accountHolderName = c.accountholderName;
        this.initialDeposit = c.intialdeposit;
        return true;
      }
    }
    return retVal;
  }
  getInitialDeposit()
  {
    return this.initialDeposit;
  }

  getAccountHolderName()
  {
    return this.accountHolderName;
  }
}
