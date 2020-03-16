import { Component } from '@angular/core';
import {  NavController, NavParams ,Platform } from 'ionic-angular';
import { LoadingController, App , AlertController,MenuController } from 'ionic-angular';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';



@Component({
  selector: 'page-android-app',
  templateUrl: 'android-app.html',
})
export class AndroidAppPage {
  index: string
  constructor(
   public platform: Platform,
    public navCtrl: NavController
    , public navParams: NavParams
    ,public loadingCtrl: LoadingController
    , public appCtrl: App 
    , public alertCtrl: AlertController
    ,public menuCtrl:MenuController
    ,private youtube: YoutubeVideoPlayer
   
  ) {
    this.index = "home";
  }

  youtube_video_tuto_vlc(){
    this.youtube.openVideo('xaa8WpdRfGI');
  }
  youtube_video_android_IPTV(){
    this.youtube.openVideo('AH_4sr4jYlA');
  }
  youtube_video_Smart_tv(){
    this.youtube.openVideo('HmGA2yDN_60');
  }

  youtube_video_Apple_TV(){
    this.youtube.openVideo('8MeTqaDh-8c');
  }
  youtube_video_kodi_Apple_TV(){
    this.youtube.openVideo('aZuM8Apw7O0');
  }
  youtube_video_IPTV_with_KODI(){
    this.youtube.openVideo('YdcntOQscSw');
  }
  youtube_video_STB_Emulator(){
   this.youtube.openVideo('OAlOBEcFQfI');
  }
  youtube_video_PVR_IPTV(){
    this.youtube.openVideo('YdcntOQscSw');
  }
  youtube_video_Mag_Box(){
    this.youtube.openVideo('x1Yq88ikVpg');
  }
  youtube_video_Enigma2(){
   this.youtube.openVideo('1hnoyi7XpIE');
  }
  youtube_video_FireTV(){
    this.youtube.openVideo('vSZf9uPlcvo');
  }
  youtube_video_Openbox_V8S(){
    this.youtube.openVideo('aUwIWr78-Vk');
  }
  youtube_video_Dreamlink_T1(){
    this.youtube.openVideo('-9Yiks7Lrls');
  }
  youtube_video_ROKU(){
    this.youtube.openVideo('9ljruetFa3w');
  }

}
