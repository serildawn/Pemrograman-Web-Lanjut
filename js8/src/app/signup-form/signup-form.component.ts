import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ValidatorUsername } from './username.validators';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  form = new FormGroup({
    username: new FormControl('',[
        Validators.required,
        Validators.minLength(5),
        ValidatorUsername.cannotContainSpace
    ],
    ValidatorUsername.unique),
    password: new FormControl('',Validators.required)
  })

  get username(){
    return this.form.get('username');
  }

  login(){
    this.form.setErrors({
      invalidLogin:true
    });
  }

  constructor() { }

  ngOnInit() {
  }

}