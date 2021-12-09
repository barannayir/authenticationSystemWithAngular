import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';


const { Storage } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
veri: any;


  constructor(private router:Router, private authenticationService:AuthenticationService, private alertController:AlertController) {
    this.authenticationService.userList().subscribe(userlist => {
      this.veri = userlist["data"]
      console.log(this.veri)
    }, err => {
      console.log(err); this.presentAlert(err.error.error)});
  }


  async removeItem(item) {
    await Storage.remove({ key: item });
  }
  logout()
  {

    this.removeItem('user_ionichttpAuth');
    this.router.navigateByUrl('/login');

  }
  mailto(email)
  {
    //this.router.navigateByUrl('mailto:' + email);
    window.open('mailto:'+email);
  }
  
  async presentAlert(mesaj) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Hata !',
      message: mesaj,
      buttons: ['Tamam']
    });
  }}
