import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams , AlertController,MenuController} from 'ionic-angular';

import { RegisterPage } from '../register/register';
//import { ProfilePage } from '../profile/profile'; 
import { ProfilEnPage } from '../profil-en/profil-en';
import { LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import { RecoveryPasswordPage } from '../recovery-password/recovery-password'

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

@ViewChild("username") username;
@ViewChild("password") password;
data:string;
items:any;
item_input_stop:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:  HttpClient
   ,  public alertCtrl: AlertController, public loading: LoadingController,public storage: Storage
   ,public menuCtrl:MenuController
    ) {
      this.menuCtrl.enable(false)
  }

 /*-------------------------------api-post-login---------------------------------*/
      //http://api-web.000webhostapp.com
      //http://space.appmofix.com
 apiUrl_post_Login = 'http://space.appmofix.com/api/login.php';
 
 postLogin(): Observable<{}> {

  let httpHeaders = new HttpHeaders({
    'Content-Type' : 'application/json',
    'Cache-Control': 'no-cache'
       });    
       let options = {
    headers: httpHeaders
       };


  return this.http.get(this.apiUrl_post_Login, options).pipe(
    map(this.extractDataLogin),
    catchError(this.handleErrorLogin)
  );
}

private extractDataLogin(res: Response) {
  let body = res;
  return body || { };
}

private handleErrorLogin (error: Response | any) {
  let errMsg: string;
  if (error instanceof Response) {
    const err = error || '';
    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  } else {
    errMsg = error.message ? error.message : error.toString();
  }
  console.error(errMsg);
  return Observable.throw(errMsg);
}
/*-----------------------------------------------------------------*/
signUp(){
  this.navCtrl.push(RegisterPage);
  }
  mot_de_passe_oublie(){
    this.navCtrl.push(RecoveryPasswordPage); 
  }

  signIn(){

    //// check to confirm the username and password fields are filled
   
    if(this.username.value=="" ){
  
   let alert = this.alertCtrl.create({
  
   title:"Warning",
   subTitle:"Username field is empty",
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
          username: this.username.value,
          password: this.password.value
        };
  
        
  
   let loader = this.loading.create({
      content: 'Wait...',
    });
  
   loader.present().then(() => {
  
  
    //this.http.post('http://space.appmofix.com/login.php',data,options)
    //this.http.post('http://127.0.0.1/iptvpay_ss/login.php',data,options)
    this.http.post('http://space.appmofix.com/api/login.php',data,options)

   /// return this.http.post('http://space.appmofix.com/login.php',data,options)
    .map(res => res.toString())
    .subscribe(res => {
    console.log(res)
     loader.dismiss()
    if(res=="Your Login success"){
     /*
      let alert = this.alertCtrl.create({
        title:"CONGRATS",
        subTitle:(res),
        buttons: ['OK']
        });
       
        alert.present();*/
       this.storage.set("session_storage",this.username.value);
       this.navCtrl.setRoot(ProfilEnPage);
       // this.navCtrl.setRoot(ProfilePage);
    }else if(res=="Your Password is invalid")
    {
     let alert = this.alertCtrl.create({
     title:"Error",
     subTitle:"Your Password is invalid",
     buttons: ['OK']
     });
    
     alert.present();
      }else{

        let alert = this.alertCtrl.create({
          title:"Error",
          subTitle:"Your Login Email or Password is invalid",
          buttons: ['OK']
          });
         
          alert.present();

      } 
    });
    });
     }
    
    }




    ionViewWillEnter(){
  
     
  let httpHeaders = new HttpHeaders({
    'Content-Type' : 'application/json',
    'Cache-Control': 'no-cache'
       });    
       let options = {
    headers: httpHeaders
       };

    
  this.http.get('http://space.appmofix.com/api/hide.php')
  
     .subscribe(res => {
     
     
     this.item_input_stop=res;
     
     console.log(this.item_input_stop);
     });
  

  
      }

}
