import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, NavParams } from '@ionic/angular';
import { Goal } from 'src/app/models/goal.model';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  segment = 'description';
  goal: Goal;
  sliderOptions = { pager: true, autoHeight: true };

  constructor(private modalCtrl: ModalController, private navParams: NavParams) { }

  ngOnInit() {
    this.goal = this.navParams.get('goal');
  }

  closeModal() {
    console.log('closeModal()');
    this.modalCtrl.dismiss();
  }

}
