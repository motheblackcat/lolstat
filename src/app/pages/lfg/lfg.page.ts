import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-lfg',
  templateUrl: './lfg.page.html',
  styleUrls: ['./lfg.page.scss'],
})
export class LfgPage implements OnInit {

  form: UntypedFormGroup;

  user = {
    name: 'zeldasama',
    icon: '/assets/img/index.jpg'
  };
  positionList = ['Toplane', 'Jungle', 'Midlane', 'Support', 'Botlane'];

  rank = ['Challenger', 'Grand master', 'Master', 'Diamant', 'Platinium', 'Gold', 'Silver', 'Bronze', 'Iron'];

  lang = ['FR', 'EN', 'KR'];

  constructor(private fb: UntypedFormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      positionOne: '',
      positionTwo: '',
      rankMax: '',
      rankMin: '',
      discord: false,
      solo: false,
      flex: false,
      clash: false,
      other: false,
      language: '',
      desc: ''

    });
  }

  save() {
    console.log(this.form.value);
  }
}
