import { Injectable } from '@angular/core';
import {CanActivate} from "@angular/router";
import{ LoginService } from '../app/login.service';

@Injectable()
export class LoggedInuserAuthGuardService {

  constructor(private loginService:LoginService) { }

  canActivate() {
    console.log("OnlyLoggedInUsers");
    if (this.loginService.getLoggedIn()=='Y') { 
      return true;
    } else {
      window.alert("You don't have permission to view this page,Please login first to continue");
      return false;
    }
  }
}
