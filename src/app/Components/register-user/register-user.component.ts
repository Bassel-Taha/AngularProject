import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {Router, RouterLink} from "@angular/router";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-register-user',
  standalone: true,
  imports: [
    HeaderComponent,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.scss'
})
export class RegisterUserComponent implements OnInit{

  private RegistrationForm : any;
  constructor(private router : Router, private _FB: FormBuilder) {
    this.RegistrationForm = _FB.group({
      'username': ['', [Validators.required , Validators.minLength(3)]],
      'password': ['', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')]],
      'email': ['' , [Validators.required, Validators.email]],
      'firstname': ['' , Validators.required],
      'lastname': [''],
      'address': _FB.group({
        'street': [''],
        'city': ['', Validators.required],
        'state': [''],
        'zip': ['']
      }),
      'phone': _FB.array([])
      }
    );
  }

  ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

}
