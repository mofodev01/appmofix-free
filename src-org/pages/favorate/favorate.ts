import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController,MenuController , ModalController,AlertController} from 'ionic-angular';

import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';
import { JsonDataProvider } from '../../providers/json-data/json-data';


import { DatabaseProvider } from '../../providers/database/database';
//import { AdMobFree, AdMobFreeInterstitialConfig} from '@ionic-native/admob-free';





@Component({
  selector: 'page-favorate',
  templateUrl: 'favorate.html',
 
})
export class FavoratePage {
  playType: string;

  url: string;

 /*
  Url : String;
    id: Number;
      title: String;
      logo: String;
      name: String;
      group: String;
*/

      
    
      ListUser: any[] = [];
       

  constructor(public navCtrl: NavController, public navParams: NavParams,private streamingMedia: StreamingMedia
    , public JsonDataProvider: JsonDataProvider,
    private database: DatabaseProvider, public loadingCtrl: LoadingController
    ,public menuCtrl:MenuController
    ,private modal: ModalController
    ,public alertCtrl: AlertController
    ) {
      this.menuCtrl.enable(true)
      this.playType = '3';
  }

  presentConfirm(urlx) {
    let alert = this.alertCtrl.create({
      title: 'player',
      message: 'Choose a video player',
      buttons: [
        {
          text: 'AV Player',
          //role: 'cancel',
          handler: () => {
            this.startVideo(urlx);
          }
        },
        {
          text: 'LiteAV Player',
          handler: () => {
            this.goToPlayerPage(urlx);
          }
        }
      ]
    });
    alert.present();
  }
  goToPlayerPage(media) {
    if (media) {
      let modal = this.modal.create('player', {
        url: media,
        playType: this.playType
      });
      modal.present();
    }
  }
   

  ngOnInit() {
    this.GetAllUser();
 }






  startVideo(url) {
            
        let options: StreamingVideoOptions = {
          successCallback: () => { console.log('Finished Video') },
          errorCallback: (e) => { console.log('Error: ', e) },
           //orientation: 'portrait'
            //orientation: 'landscape'
        };
     
        // http://www.sample-videos.com
        this.streamingMedia.playVideo(''+url+'', options);
      
     

 }


GetAllUser(){
  /**/

 ///-------------------------------
 let loading = this.loadingCtrl.create({
  content: 'Wait...'
});

loading.present();
 ///-------------------------------

  this.database.GetAllfavorates().then((data: any) => {
    console.log(data);
    this.ListUser = data;
    loading.dismiss();
  }, (error) => {
    console.log(error);
    loading.dismiss();
  })

}


Deletefavorate(id : any, index){
  /**/
  this.database.Deletefavorate(id)
  .then(response => {
    console.log( response );
    this.ListUser.splice(index, 1);
  })
  .catch( error => {
    console.error( error );
  })
  
}






}
