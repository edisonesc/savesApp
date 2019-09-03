import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, ActionSheetController, ToastController, AlertController } from '@ionic/angular';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { GoalService } from 'src/app/services/goal.service';
import { Goal } from 'src/app/models/goal.model';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-add-goal-modal',
  templateUrl: './add-goal-modal.page.html',
  styleUrls: ['./add-goal-modal.page.scss'],
})
export class AddGoalModalPage implements OnInit {
  goal: Goal;
  newGoal: Goal = <Goal>{};
  imageResponse = [];
  linkResponse = [];
  options: any;
  constructor(
    private modalCtrl: ModalController,
    private actionSheetCtrl: ActionSheetController,
    private camera: Camera,
    private toastCtrl: ToastController,
    private goalService: GoalService,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }
  closeModal() {
    this.modalCtrl.dismiss();
  }
  getImages(source) {
    this.options = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: source,
      saveToPhotoAlbum: false,
      correctOrientation: true,
      encodingType: this.camera.EncodingType.JPEG,
      height: 200

    };

    this.camera.getPicture(this.options).then((result) => {
      this.imageResponse.push('data:image/jpeg;base64,' + result);
      this.createToast(this.imageResponse.length, 3000);
    }, (err) => { alert(err); });

  }

  async addLink() {
    let linkAlert = await this.alertCtrl.create({
      header: 'Add Link',
      inputs: [
        {
          placeholder: 'Enter Link',
          name: 'link',
          type: 'text'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Add',
          handler: data => {
            console.log(data.link);
            this.linkResponse.push(data.link);
          }
        }
      ]
    });

    await linkAlert.present();
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
  async openUpload() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Select Image From',
      buttons: [{
        text: 'Load from Gallery',
        handler: () => {
          // this.getImages();
          this.getImages(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'Use Camera',
        handler: () => {
          // this.getImages();
          this.getImages(this.camera.PictureSourceType.CAMERA);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }]
    });
    actionSheet.present();
  }


  addGoal() {
    this.newGoal.images = this.imageResponse;
    this.newGoal.links = this.linkResponse;
    this.goalService.createGoal(this.newGoal).then(item => {
      this.newGoal = <Goal>{};
      this.createToast('Item Added', 3000);
    });
    console.log(this.newGoal.description);
  }
}
