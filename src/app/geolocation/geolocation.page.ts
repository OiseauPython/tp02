import { Component, OnInit } from '@angular/core';
import {AlertController, LoadingController, ToastController} from '@ionic/angular';
import {Geolocation} from '@ionic-native/geolocation/ngx';


@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.page.html',
  styleUrls: ['./geolocation.page.scss'],
})
export class GeolocationPage implements OnInit {

  constructor(public toastController: ToastController,
              private alertController: AlertController,
              public loadingController: LoadingController,
              private geolocation: Geolocation) {}

  lat: any = '';
  lng: any = '';

  ngOnInit() {
  }


  async toast() {
    const toast = await this.toastController.create({
      message: 'Localisation effectuée',
      duration: 2000
    });
    await toast.present();
  }

  async getLoc() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
    });
    await loading.present();
    this.geolocation.getCurrentPosition(
        {maximumAge: 1000, timeout: 5000,
          enableHighAccuracy: true }
    ).then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      // alert("r succ"+resp.coords.latitude)
      // alert(JSON.stringify( resp.coords));
      loading.dismiss();
      this.lat = resp.coords.latitude;
      this.lng = resp.coords.longitude;
      this.toast();
    }, er => {
      loading.dismiss();
      // alert("error getting location")
      alert('Can not retrieve Location');
    }).catch((error) => {
      // alert('Error getting location'+JSON.stringify(error));
      // console.log('Error getting location', error);
      alert('Error getting location - ' + JSON.stringify(error));
    });
  }

  async showLoader(msg) {
    const alert = await this.alertController.create({
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

}
