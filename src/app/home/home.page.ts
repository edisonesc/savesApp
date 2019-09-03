import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddGoalModalPage } from '../pages/add-goal-modal/add-goal-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modalCtrl: ModalController) { }
  async addGoalModal() {
    const modal = await this.modalCtrl.create({
      component: AddGoalModalPage
    });
    modal.present();
  }
}
