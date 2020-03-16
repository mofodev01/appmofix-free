import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
////import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MyApp } from './app.component';
///import { HomePage } from '../pages/home/home';
import { LivePage } from '../pages/live/live';
////import { AnimePage } from '../pages/anime/anime';
import { FavoratePage } from '../pages/favorate/favorate';
import { FilmsPage } from '../pages/films/films';

import { TvSeriesPage } from '../pages/tv-series/tv-series';
import { KidMoviesPage } from '../pages/kid-movies/kid-movies';

import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ProfilePage } from '../pages/profile/profile';
import { SettingPage } from '../pages/setting/setting';
import { DetailPage } from '../pages/detail/detail'
import { DetailfilmsPage } from '../pages/detailfilms/detailfilms'


import { InfoPage } from '../pages/info/info'

import { DownloadPage } from '../pages/download/download';
import { AndroidAppPage } from '../pages/android-app/android-app'
 
import { ProfilEnPage } from '../pages/profil-en/profil-en'

import { VodExYuPage } from '../pages/vod-ex-yu/vod-ex-yu'
import { VodGamingPage } from '../pages/vod-gaming/vod-gaming'

import { VipPage } from '../pages/vip/vip'

import { ContactPage } from '../pages/contact/contact';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { StreamingMedia } from '@ionic-native/streaming-media';
import { JsonDataProvider } from '../providers/json-data/json-data';
import { SearchPipe } from '../pipes/search/search';
import { SortPipe } from '../pipes/sort/sort';
import { Toast } from '@ionic-native/toast';

import { HttpClientModule } from '@angular/common/http';
import { DatabaseProvider } from '../providers/database/database';
import { IonicStorageModule } from '@ionic/storage';
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import { SQLite } from '@ionic-native/sqlite';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Market } from '@ionic-native/market';


import { PayPal } from '@ionic-native/paypal';
import { Geolocation } from  '@ionic-native/geolocation';
import { NativeGeocoder } from '@ionic-native/native-geocoder';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { Device } from '@ionic-native/device';
import { OneSignal } from '@ionic-native/onesignal';
import { Network } from '@ionic-native/network';
import {  
  FileTransfer,  
  FileTransferObject  
} from '@ionic-native/file-transfer';  
import {  
  File  
} from '@ionic-native/file';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { Clipboard } from '@ionic-native/clipboard';
import { EmailComposer } from '@ionic-native/email-composer';
import { PrivacyTermsPage } from '../pages/privacy-terms/privacy-terms';
import { RecoveryPasswordPage } from '../pages/recovery-password/recovery-password';

//import { InAppBrowser } from '@ionic-native/in-app-browser';
//import { InAppBrowser } from '@ionic-native/in-app-browser';

import { SafariViewController } from '@ionic-native/safari-view-controller';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

@NgModule({
  declarations: [
    MyApp,
    ///HomePage,
    LivePage,
    SearchPipe,
  SortPipe,
 /// AnimePage,
  FilmsPage,

  FavoratePage,
  
  LoginPage,
  RegisterPage,
  ProfilePage,
  ProfilEnPage,
  SettingPage,
  DetailPage,
  DetailfilmsPage,
 
  VodExYuPage,
  VodGamingPage,

  VipPage,
  KidMoviesPage,
  TvSeriesPage,
 
  ContactPage,
  DownloadPage,
  AndroidAppPage,
  PrivacyTermsPage,
  InfoPage,
  RecoveryPasswordPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
      backButtonIcon: 'arrow-round-back',
      iconMode: 'ios',
      mode: 'ios',
      modalEnter: 'modal-md-slide-in',
      modalLeave: 'modal-md-slide-out',
      tabsPlacement: 'bottom',
      pageTransition: 'ios-transition',
      tabsHideOnSubPages: true
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ///HomePage,
    LivePage,
    ///AnimePage,
    FilmsPage,

    FavoratePage,
   
    LoginPage,
    RegisterPage,
    ProfilePage,
    ProfilEnPage,
    SettingPage,
    DetailPage,
    DetailfilmsPage,
   
    VodExYuPage,
    VodGamingPage,
  
    VipPage,
    KidMoviesPage,
    TvSeriesPage,
  
    ContactPage,
    DownloadPage,
    AndroidAppPage,
    PrivacyTermsPage,
    InfoPage,
    RecoveryPasswordPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    StreamingMedia,
    
    SQLitePorter,
    SQLite,
    Toast,
    SocialSharing,
    Market,
    PayPal,
   /**/ 
    HttpClientModule,
    /*IonicStorageModule,
   */
    Geolocation,
    NativeGeocoder,
    LocationAccuracy,
    Device,
    
    FileTransfer,  
    FileTransferObject,  
    File ,
    YoutubeVideoPlayer ,
    Clipboard ,
    EmailComposer ,
    OneSignal,
    Network,
   
    SafariViewController,
    ScreenOrientation,
    
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    JsonDataProvider,
    DatabaseProvider
   
  ]
})
export class AppModule {}
