import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {
  mySelect:any = '';
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(myFormObject:any) :void {
    console.log(myFormObject)
    // if (myFormObject.valid) {
    //   console.log('valid',myFormObject.value);
    // } else {
    //   console.error('NOT VALID')
    // }
  }

}
