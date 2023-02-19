import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup;
  constructor(private formbuilder: FormBuilder) {
    this.form = this.formbuilder.group(
      {
        email: ['',[Validators.required, Validators.email]],
        password: ['',[Validators.required, Validators.minLength(8)]],
        deviceInfo: this.formbuilder.group(
          {
            diviceId: [''],
            diviceType: [''],
            notificationToken: ['']
          }
        )
      }
    )

  }

  ngOnInit(): void {
  }

  getEmail(){
    return this.form.get('email');
  }

  getPassword(){
    return this.form.get('password');
  }

}
