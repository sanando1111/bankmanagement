import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testmodule',
  templateUrl: './testmodule.component.html',
  styleUrls: ['./testmodule.component.css']
})
export class TestmoduleComponent implements OnInit {


  title:string;
  constructor() {
    this.title='This is a test component';

   
   }

  ngOnInit(): void {

    
  }

}
