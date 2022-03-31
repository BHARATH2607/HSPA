import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})

export class UserRegisterComponent implements OnInit {

  registerationForm : FormGroup;
  submitted = false;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.registerationForm = this.formBuilder.group({
      userName : ['', Validators.required],
      email : ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword : ['', Validators.required],
      mobileNumber : ['', [Validators.required, Validators.maxLength(10)]]
    },this.passwordMatchingValidator);
  }

  private passwordMatchingValidator(fg: AbstractControl) : ValidationErrors|null {
    return fg.get('password')?.value === fg.get('confirmPassword')?.value
    ? null : {notmatched: true}
  }

  // Getter Method for all form fields
  get f() { return this.registerationForm.controls; }

  onSubmit(){
    this.submitted = true;

    if(this.registerationForm.invalid){
      return;
    }

    console.log(this.registerationForm);
  }

  onReset(){
    this.submitted = true;
    this.registerationForm.reset();
  }

}
