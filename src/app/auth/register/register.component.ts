import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    email: new FormControl('',Validators.required),
    password: new FormControl('')
  });

  constructor() { }

  ngOnInit() {}

  onRegister() {
    console.log('form->', this.registerForm.value);
  }

}
