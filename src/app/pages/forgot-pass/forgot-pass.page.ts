import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.page.html',
  styleUrls: ['./forgot-pass.page.scss'],
})
export class ForgotPassPage implements OnInit {

  form: UntypedFormGroup;
  constructor(private fb: UntypedFormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: ''
    });
  }

  send() {
    console.log(this.form.value);
  }
}
