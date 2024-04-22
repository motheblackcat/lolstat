import { Component, OnInit } from '@angular/core';
import { UntypedFormArray, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  form: UntypedFormGroup;
  get accountsArray(): UntypedFormArray {
    return this.form.get('accounts') as UntypedFormArray;
  }

  constructor(private fb: UntypedFormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: '',
      password: '',
      accounts: this.fb.array([''])
    });
  }

  addAccount() {
    this.accountsArray.push(this.fb.control(''));
  }

  register() {
    console.log(this.form.value);
  }
}

