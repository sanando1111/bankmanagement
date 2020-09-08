import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-applyloan',
  templateUrl: './applyloan.component.html',
  styleUrls: ['./applyloan.component.css']
})
export class ApplyloanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  form = new FormGroup({
    loanType: new FormControl('', Validators.required)
  });

  submit(){
    console.log(this.form.value);
  }
}
