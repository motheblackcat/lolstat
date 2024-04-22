import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: '',
      password: '',
      remember: true
    });
  }

  logIn() {
    console.log(this.form.value);
  }
}
