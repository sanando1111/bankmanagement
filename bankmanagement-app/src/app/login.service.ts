import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer';
//import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider,SocialUser,SocialAuthService } from "angularx-social-login";
//import { SocialUser } from "angularx-social-login";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = 'http://localhost:8080/serverApi'
  initialDeposit: number;
  accountHolderName: string;
  user: SocialUser;
  loggedIn: string;
  cust:Customer;  
    


  constructor(private http: HttpClient,private authService: SocialAuthService,private router: Router) {
  }

  customers: Customer[] = [
    {
      customerId: 'R-100',
      name: 'AC',
      username: 'Aritra',
      password: 'Chatterjee',
      address: 'PlotNo-1, First Main Road, Salt Lake Calcutta',
      email: 'ac@abc.com',
      gender: 'Male',
      maritalStatus: 'Single',
      contactNumber: '1111',
      dateOfBirth: null,
      accountNumber: 1234567899876543,
      accountType: null,
      initialDepositAmount: 500.25
    },
    {
      customerId: 'R-200',
      name: 'SC',
      username: 'Sanando',
      password: 'Chakraborty',
      address: 'PlotNo-1, First Main Road, Salt Lake Calcutta',
      email: 'ac@abc.com',
      gender: 'Male',
      maritalStatus: 'Single',
      contactNumber: '1111',
      dateOfBirth: new Date(Date.now()),
      accountNumber: 1234567899876543,
      accountType: "Salary",
      initialDepositAmount: 600.25
    },
    {
      customerId: 'R-300',
      name: 'SG',
      username: 'sailesh',
      password: 'gor',
      address: 'PlotNo-1, First Main Road, Salt Lake Calcutta',
      email: 'ac@abc.com',
      gender: 'Male',
      maritalStatus: 'Single',
      contactNumber: '1111',
      dateOfBirth: null,
      accountNumber: 1234567899876543,
      accountType: null,
      initialDepositAmount: 500.25
    }
  ];



  validateLogin(customer: Customer): Customer {
    // in real time there will be separate service call to the given service URL
    console.log('we are in validateLogin Function');
    for (const c of this.customers) {
      if (c.username === customer.username && c.password === customer.password) { return c; }
    }
    return null;
  }
  getInitialDeposit()
  {
    return this.initialDeposit;
  }

  getAccountHolderName()
  {
    return this.accountHolderName;
  }

  getCustomerById(id: string): Customer {
    console.log('Inside getCustomerById: ' + id);
    console.log('Customer: ' + this.customers[0].customerId);
    // tslint:disable-next-line:prefer-const
    for (let cust  of this.customers) {
      if (id == cust.customerId) {
        console.log('Inside username : ' + cust.username);
        return cust;
      }
    }
    return null;
  }

  getCustomerCount(): number {
    return this.customers.length;
  }

  
 
  signInWithFB(): any {
    //this.isInitialized().subscribe(e=>console.log(e));
    this.authService.initialized=true;
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    
     this.authService.authState.subscribe((user) => {
      this.user = user;
     this.loggedIn = 'Y';
      console.log(this.user);
      this.router.navigate(['home', 'R-200']);
      //hard coded the below part since it is bank management system and user Social UserId does not exist on the system.
     },error => {
      console.log('Error occured');
    }).add(() => {
      // Do some work after complete...
      this.router.navigate(['home', 'R-200']);
    });
  
    // if(this.loggedIn='Y')
    // {
    //   //Hard Coded the userId
    //   this.router.navigate(['home', 'R-200']);

    // }
    
  }
 
  signOut(): void {
    this.authService.signOut();
  }
  getLoggedIn(): string
  {
    return this.loggedIn;
  }
  

   isInitialized(): Observable<boolean> {
    return new Observable((observer) => {
      if (this.authService.initialized) {
        observer.next(this.authService.initialized);
        observer.complete();
        observer.unsubscribe();
      } else {
        observer.next(this.authService.initialized);
      }
    });

  
}
}
