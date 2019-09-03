import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, ToastController } from '@ionic/angular';
import { ModalPage } from 'src/app/pages/modal/modal.page';
import { Goal } from '../../models/goal.model';
import { GoalService } from 'src/app/services/goal.service';
@Component({
  selector: 'app-goal-tabs',
  templateUrl: './goal-tabs.page.html',
  styleUrls: ['./goal-tabs.page.scss'],
})
export class GoalTabsPage implements OnInit {
  goals: Goal[] = [];
  newGoal: Goal = <Goal>{};
  sliderOptions = { pager: true, autoHeight: true };


  constructor(private modal: ModalController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private goalService: GoalService
  ) { }

  ngOnInit() {
    this.goalService.subscribeGoal().subscribe(goals => {
      this.goals = goals;
    });
    this.goalService.fetchGoals();

  }

  async openModalPreview(goal: Goal) {
    let data = { goal: goal };
    const myModal = await this.modal.create({
      componentProps: data,
      component: ModalPage,
    });
    myModal.present();
  }
  async openModalUpdate() {
    let alert = await this.alertCtrl.create({
      header: 'Macbook Pro 13',
      subHeader: '5 /79, 990',
      inputs: [
        {
          name: 'amount',
          placeholder: 'Amount',
          type: 'number'
        }
      ],
      buttons: [
        {
          text: 'Add',
          handler: data => {
            if (data.amount.length === 0) {
              this.createToast('No Value was entered.', 2000);
            }
          }
        },
        {
          text: 'Deduct',
          handler: data => {
            if (data.amount.length === 0) {
              this.createToast('No Value was entered.', 2000);
            }
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',

        }]
    });
    alert.present();
  }

  doRefresh(event) {
    this.goalService.fetchGoals();
    setTimeout(() => {
      event.target.complete();
    }, 2000);

  }
  async createToast(msg, dur) {
    let toast = await this.toastCtrl.create({
      message: msg,
      duration: dur,
      position: 'bottom'
    });
    console.log(msg);
    toast.present();
  }
}
