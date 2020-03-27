import { Component , ViewChild } from '@angular/core';
import { NavController, NavParams , AlertController,MenuController} from 'ionic-angular';

import { LoginPage } from '../login/login';
import { LoadingController } from 'ionic-angular';

import { HttpClient,HttpHeaders  } from '@angular/common/http';

import { Geolocation } from '@ionic-native/geolocation';

import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';
import { Device } from '@ionic-native/device';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  responseObj:any;
  watchLocationUpdates:any; 
  loading_geo:any;
  isWatching:boolean;

 platform: any;
 model: any;
 version: any;
 manufacturer: any;
 id: any ;
 serial: any ;


  @ViewChild("device") device;
  @ViewChild("geolocal") geolocal;
  @ViewChild("email") email;
  @ViewChild("username") username;
  @ViewChild("mobile") mobile;
  @ViewChild("password") password;
  @ViewChild("confirm_password") confirm_password;
  @ViewChild("app_name") app_name;
  @ViewChild("uuid") uuid;
  constructor(public navCtrl: NavController, public navParams: NavParams,
     public alertCtrl: AlertController,  private http: HttpClient,  public loading: LoadingController
     ,
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder
    ,private devicemodule: Device
     ,public menuCtrl:MenuController
    ) {
      this.menuCtrl.enable(false)
      //Custome object to save information returned
      this.responseObj = {
        latitude:0,
        longitude:0,
        accuracy:0,
        address:""
      };
  }

  Register(){
   
   
     if(this.username.value=="" ){
   
    let alert = this.alertCtrl.create({
   
    title:"Warning",
    subTitle:"Username field is empty",
    buttons: ['OK']
    });
   
    alert.present();
     } else
    if(this.email.value==""){
   
    let alert = this.alertCtrl.create({
   
    title:"Warning",
    subTitle:"Email field is empty",
    buttons: ['OK']
    });
   
    alert.present();
         
   }
    else 
     if(this.mobile.value=="" ){
   
    let alert = this.alertCtrl.create({
   
    title:"Warning",
    subTitle:"Mobile number field is empty",
    buttons: ['OK']
    });
   
    alert.present();
     } else
    if(this.password.value==""){
   
    let alert = this.alertCtrl.create({
   
    title:"Warning",
    subTitle:"Password field is empty",
    buttons: ['OK']
    });
   
    alert.present();
         
   } 
   else if(this.password.value != this.confirm_password.value){
   
    let alert = this.alertCtrl.create({
   
    title:"Warning",
    subTitle:"Password not match",
    buttons: ['OK']
    });
   
    alert.present();
         
   }
    else 
    {
   
   
      let httpHeaders = new HttpHeaders({
        'Content-Type' : 'application/json',
        'Cache-Control': 'no-cache'
           });      
           let options = {
        headers: httpHeaders
           };
   
     let data = {
           device: this.device.value,
           geolocal: this.geolocal.value, 
           username: this.username.value,
           password: this.password.value,
           mobile: this.mobile.value,
           email: this.email.value,      
           app_name: this.app_name.value,
           uuid: this.uuid.value    
         };
   
   
    let loader = this.loading.create({
       content: 'Processing please wait...',
     });
   
    loader.present().then(() => {

   this.http.post('http://space.appmofix.com/api/register.php',data, options)
   //this.http.post('http://127.0.0.1/i/api/register.php',data, options)
   .map(res => res.toString())
   .subscribe(res => {
   
    loader.dismiss()
   if(res=="Registration successfull"){
     let alert = this.alertCtrl.create({
       title:"CONGRATS",
       subTitle:(res),
       buttons: ['OK']
       });
      
       alert.present();
    this.navCtrl.push(LoginPage);
   
   }else
   {
    let alert = this.alertCtrl.create({
    title:"ERROR",
    subTitle:(res),
    buttons: ['OK']
    });
   
    alert.present();
     } 
   });
   });
    }
   
   }
/**----------------------------------------par-geolocalisation--------------------------------- */
  //Show UI loader of ionic
  /**/
  showLoader(){
    this.loading_geo = this.loading.create({
      content: 'Please wait...'
    });
    this.loading_geo.present();
  }
 
  //Hide UI loader of ionic
  hideLoader(){
    this.loading_geo.dismiss();
  }
  


  //Get current coordinates of device
  ionViewWillEnter(){
   
    //-----------------------------DEVICE-INFO-----------------------------
    
    this.model = this.devicemodule.model;
    this.platform = this.devicemodule.platform;
    this.version = this.devicemodule.version;
    this.manufacturer = this.devicemodule.manufacturer;
    this.id= this.devicemodule.uuid;
    this.serial=this.devicemodule.serial;
    
    //-----------------------------------------------------------
   // this.showLoader();
    this.geolocation.getCurrentPosition().then((resp) => {
      this.responseObj = resp.coords; 
      //this.hideLoader();
      this.getGeoencoder(this.responseObj.latitude,this.responseObj.longitude);
     }).catch((error) => {
       alert('Error getting location'+ JSON.stringify(error));
       //this.hideLoader();
     });
  }
 
  //geocoder method to fetch address from coordinates passed as arguments
  getGeoencoder(latitude,longitude){
    ///this.showLoader();
    let geoencoderOptions: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };
    this.nativeGeocoder.reverseGeocode(latitude, longitude, geoencoderOptions)
    .then((result: NativeGeocoderReverseResult[]) => {
      this.responseObj.address = this.generateAddress(result[0]);
      //----------------------------------------------------
      
      //----------------------------------------------------
     // this.hideLoader();
    })
    .catch((error: any) => {
      alert('Error getting location'+ JSON.stringify(error));
      //this.hideLoader();
    });
  }
 
  //Return Comma saperated address
  generateAddress(addressObj){
      let obj = [];
      let address = "";
      for (let key in addressObj) {
        obj.push(addressObj[key]);
      }
      obj.reverse();
      for (let val in obj) {
        if(obj[val].length)
        address += obj[val]+', ';
      }
    return address.slice(0, -2);
  }
 
 
  //Start location update watch
  watchLocation(){
    //this.showLoader();
    this.isWatching = true;
    this.watchLocationUpdates = this.geolocation.watchPosition();
    this.watchLocationUpdates.subscribe((resp) => {
      //alert(JSON.stringify(resp));
      //this.hideLoader();
      this.responseObj = resp.coords;
      this.getGeoencoder(this.responseObj.latitude,this.responseObj.longitude);
      // resp can be a set of coordinates, or an error (if an error occurred).
      // resp.coords.latitude
      // resp.coords.longitude
    });
  }
 
  //Stop location update watch
  stopLocationWatch(){
    this.isWatching = false;
    this.watchLocationUpdates.unsubscribe();
  }




}
