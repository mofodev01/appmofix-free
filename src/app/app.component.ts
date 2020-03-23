import { Component, ViewChild } from '@angular/core';
import { Nav, Platform ,ActionSheetController,AlertController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { Storage } from '@ionic/storage';

import { LivePage } from '../pages/live/live';
import { FavoratePage } from '../pages/favorate/favorate';
import { FilmsPage } from '../pages/films/films';

import { ContactPage } from '../pages/contact/contact'



import { Market } from '@ionic-native/market';
import { SocialSharing } from '@ionic-native/social-sharing';



import { LocationAccuracy } from '@ionic-native/location-accuracy';


import { HttpClient/*,HttpHeaders*/  } from '@angular/common/http';
import { PrivacyTermsPage } from '../pages/privacy-terms/privacy-terms'
import { OneSignal } from '@ionic-native/onesignal';
import { Network } from '@ionic-native/network';
import { AdMobFree, AdMobFreeBannerConfig/*, AdMobFreeInterstitialConfig*/ } from '@ionic-native/admob-free';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  

  data:any;
  items:any;
  data_storage:any;
  

  @ViewChild(Nav) nav: Nav;

  //rootPage: any = HomePage;
  rootPage: any = LoginPage;



  pages: Array<{title: string , icon: string , component: any}>;

  constructor(private network: Network,private oneSignal: OneSignal ,public http:  HttpClient ,  
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,private market: Market,
    private socialSharing: SocialSharing,
    public actionsheetCtrl: ActionSheetController,
    public alertCtrl: AlertController ,
    private admobFree: AdMobFree,
    private storage: Storage,
    private locationAccuracy: LocationAccuracy) {
    this.initializeApp();
    this.showBanner();
    this.localisation();
    this.fetchuser();
    this.push_notification();
    this.network_space();
    // used for an example of ngFor and navigation   SeriesPage
    

  }

  network_space(){
    this.network.onDisconnect().subscribe(() => {
      let alert = this.alertCtrl.create({
      title: "The connection failed !",
      subTitle: "There may be a problem in your Internet connection. Try Again !",
      buttons: [{
  
      text: ("Okay")
      }]
      });
      alert.present();
      });
      this.network.onConnect().subscribe(() => {
  
      });
  }

  push_notification(){

    this.oneSignal.startInit('02637e80-539c-4982-876e-09f0cb8260bb', '111011916546');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
    
    this.oneSignal.handleNotificationReceived().subscribe(() => {
     // do something when notification is received
    });
    
    this.oneSignal.handleNotificationOpened().subscribe(() => {
      // do something when a notification is opened
    });
    
    this.oneSignal.endInit();

  }


  fetchuser(){
  
  
   this.pages = [
    { title: 'Home', component: ProfilePage,icon : "home" }
    , { title: 'Live Tv', component: LivePage,icon : "desktop" }
    ,{ title: 'VOD Movies', component: FilmsPage,icon : "film" }

    ,{ title: 'Support', component: ContactPage,icon : "mail" }
    ,{ title: 'Privacy & Terms', component: PrivacyTermsPage,icon : "md-lock" }
    ,{ title: 'Favourite', component: FavoratePage,icon : "bookmarks" }
    
    
  ]; 
  
 

    }

  






  localisation(){
    //------------------location-Accuracy-----------------------
    this.locationAccuracy.canRequest().then((canRequest: boolean) => {
  
      if(canRequest) {
        // the accuracy option will be ignored by iOS
        this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
          () => console.log('Request successful'),
          error => console.log('Error requesting location permissions', error)
        );
      }
    
    });
    //-----------------------------------------------------------
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
     
    });

    this.storage.get('session_storage').then((res)=> {
      if(res == null){
        this.rootPage=LoginPage;
      }else{
        this.rootPage=ProfilePage;
      }
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  rateApp(){
    this.market.open('com.appmofix.streaming');
    }

    shareApp() {
      /*  this.appodeal.hide(this.appodeal.AD_TYPES.BANNER);*/
        let actionSheet = this.actionsheetCtrl.create({
          title: 'Share',
          cssClass: 'action-sheets-basic-page',
          buttons: [
            {
              text: 'Facebook',
              role: 'destructive',
              icon: 'logo-facebook',
             // cssClass: 'action-red',
              handler: () => {
               
this.socialSharing.shareViaFacebook("", "", "https://play.google.com/store/apps/details?id=com.appmofix.streaming").then(() => {
                    console.log("shareViaFacebook: Success");
                  }).catch(() => {
                    console.error("shareViaFacebook: failed");
                  });
               
              }
            },
         
          
            {
              text: 'Whatsapp',
              role: 'destructive',
              icon: 'logo-whatsapp',
           
              handler: () => {
this.socialSharing.shareViaWhatsApp("", "http://space.appmofix.com/image/appmofix.png" ,"https://play.google.com/store/apps/details?id=com.appmofix.streaming").then(() => {
                  console.log("shareViaWhatsApp: Success");
                }).catch(() => {
                  console.error("shareViaWhatsApp: failed");
                });
              }
            },
            {
              text: 'Twitter',
              role: 'destructive',
              icon: 'logo-twitter',
           
              handler: () => {
this.socialSharing.shareViaTwitter("", "http://space.appmofix.com/image/appmofix.png" ,"https://play.google.com/store/apps/details?id=com.appmofix.streaming").then(() => {
                  console.log("shareViatwitter: Success");
                }).catch(() => {
                  console.error("shareViatwitter: failed");
                });
              }
            },
            {
              text: 'Other',
              role: 'destructive',
              icon: 'paper-plane',
            
              handler: () => {
this.socialSharing.share("","", "http://space.appmofix.com/image/appmofix.png" ,"https://play.google.com/store/apps/details?id=com.appmofix.streaming").then(() => {
                  console.log("shareViatwitter: Success");
                }).catch(() => {
                  console.error("shareViatwitter: failed");
                });
              }
            },
            {
              text: 'Cancel',
              role: 'cancel', // will always sort to be on the bottom
              icon: 'close' ,
              handler: () => {
                console.log('Cancel clicked');
              }
            }
          ]
        });
        actionSheet.present();
      }

   
      showBanner(){
        /**/
        const bannerConfig: AdMobFreeBannerConfig = {
          //isTesting: true,// Remove in production
          autoShow: true,
          id:'ca-app-pub-3000905870244951/9557464976'


         };
         this.admobFree.banner.config(bannerConfig);
         
         this.admobFree.banner.prepare()
           .then(() => {
           
           })
           .catch(e => console.log(e));
        
      
      }  
     

}
