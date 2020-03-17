import { Component } from '@angular/core';
import { NavController, NavParams,Platform,LoadingController,MenuController} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { JsonDataProvider } from '../../providers/json-data/json-data';

import { AdMobFree, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';
import { DatabaseProvider } from '../../providers/database/database';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';
import { Toast } from '@ionic-native/toast';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  title:any;
  categorie:any;
  id:any;
  countries: any;
  data_storage:any;
  errorMessage: string;

  limit = 100;


  descending: boolean = false;
order: number;
column: string = 'tvname';
/*----------------------------*/

  ListUser = [];

  constructor(public navCtrl: NavController, public navParams: NavParams
    ,public JsonDataProvider: JsonDataProvider, public loadingCtrl: LoadingController
    ,public storage: Storage,private database: DatabaseProvider,
    public platform: Platform,private toast: Toast,private streamingMedia: StreamingMedia,
   /**/ private admobFree: AdMobFree,
    public menuCtrl:MenuController
    ) {
      this.menuCtrl.enable(true)
  
      this.categorie = this.navParams.get('categorie');
      this.title = this.navParams.get('title'); 

  }

  ionViewDidLoad() {
    /**-----------------test user and cat-------------------- */
    this.categorie = this.navParams.get('categorie');
    console.log(this.categorie);
    this.title = this.navParams.get('title'); 
    console.log(this.title);
    this.id = this.navParams.get('id'); 
    console.log(this.id);

    this.storage.get("session_storage").then((res)=>{
      this.data_storage=res;
      
      console.log(this.data_storage);
    });
    /**-----------------test user and cat-------------------- */
  }

  ngOnInit() {
    this.getLiveCountry();
             }

  getLiveCountry() {

     
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    loading.present();

   /**----------------------------------------- */
  
      this.storage.get("session_storage").then((res)=>{
       this.data_storage=res;
       
       console.log(this.data_storage);
 /**----------------------------------------- */

    this.categorie = this.navParams.get('categorie');
    console.log(this.categorie);
    this.id = this.navParams.get('id'); 
    
  /**----------------------------------------- */

    this.JsonDataProvider.getLive(this.id,this.categorie)
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
 this.launchInterstitial();
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

        /**/

launchInterstitial() {
          
          const interstitialConfig: AdMobFreeInterstitialConfig = {
                  isTesting: true,// Remove in production
                 // autoShow: true,
              //id: Your Ad Unit ID goes here
                  id:'ca-app-pub-3000905870244951/4658521773'
          };
        
          this.admobFree.interstitial.config(interstitialConfig);
        
          
          this.admobFree.interstitial.prepare().then(() => {
              // success
              
          });
        
      
        }

}
