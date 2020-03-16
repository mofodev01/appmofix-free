import { Component } from '@angular/core';
import { NavController, NavParams,Platform,LoadingController,MenuController, ModalController,AlertController} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { JsonDataProvider } from '../../providers/json-data/json-data';


import { DatabaseProvider } from '../../providers/database/database';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';
import { Toast } from '@ionic-native/toast';



@Component({
  selector: 'page-vod-ex-yu',
  templateUrl: 'vod-ex-yu.html',
})
export class VodExYuPage {

  playType: string;

  url: string;

  title:any;
  categorie:any;
  countries: any;
  data_storage:any;
  errorMessage: string;

  limit = 100;


  descending: boolean = false;
order: number;
column: string = 'tvname';
placeholder = "https://image.prntscr.com/image/40007xNYQNKMcy68bEChwQ.png";
/*----------------------------*/

  ListUser = [];

  constructor(public navCtrl: NavController, public navParams: NavParams
    ,public JsonDataProvider: JsonDataProvider, public loadingCtrl: LoadingController
    ,public storage: Storage,private database: DatabaseProvider,
    public platform: Platform,private toast: Toast,private streamingMedia: StreamingMedia
    ,public menuCtrl:MenuController
    ,private modal: ModalController
    ,public alertCtrl: AlertController
    ) {
      this.menuCtrl.enable(true)
      this.playType = '4';
     
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

  ionViewDidLoad() {
    /**-----------------test user -------------------- */

    this.storage.get("session_storage").then((res)=>{
      this.data_storage=res;
      
      console.log(this.data_storage);
    });
    /**-----------------test user-------------------- */
  }

  ngOnInit() {
    this.get_VODExYu();
             }

             get_VODExYu() {

     
    let loading = this.loadingCtrl.create({
      content: 'Wait...'
    });
  
    loading.present();

   /**----------------------------------------- */
  
      this.storage.get("session_storage").then((res)=>{
       this.data_storage=res;
       
       console.log(this.data_storage);
 /**----------------------------------------- */
this.JsonDataProvider.getVODExYu(this.data_storage)
             .subscribe(
               countries =>{
                 this.countries = countries 
                     loading.dismiss();
                           } ,
               error => {
                 this.errorMessage = <any>error
                    loading.dismiss();
                        });

         ///-----
              })
         ///-----
  
   }

   doInfinite(infiniteScrollEvent) {
    this.limit += 20;
    infiniteScrollEvent.complete();
    infiniteScrollEvent.disabled = true;
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

  sort(){
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }

             
             CreateUser(
               id: Number,
                title: String,
                Url : String,
                logo: String,
                name: String,
                group: String){
              /**/
           
              this.database.Createfavorate( id, title, Url, name,logo,group )
              .then( (data) => {
                console.log(data);
               
              }, (error) => {
                console.log(error);
              })


              this.toast.show('successfully added', '5000', 'center').subscribe(
                toast => {
                  console.log(toast);
                }
              );


            }
            
            GetAllUser(){
              /**/
              this.database.GetAllfavorates().then((data: any) => {
                console.log(data);
                this.ListUser = data;
              }, (error) => {
                console.log(error);
              })
              
            }
            
            DeleteUser(idfavorate){
              console.log(idfavorate);
            
            }

            doRefresh(refresher) {


              setTimeout(() => {
              refresher.complete();
             }, 2000);
         }

}
