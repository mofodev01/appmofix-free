import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams , AlertController,MenuController} from 'ionic-angular';

import { RegisterPage } from '../register/register';
import { ProfilePage } from '../profile/profile';
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

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:  HttpClient
   ,  public alertCtrl: AlertController, public loading: LoadingController,public storage: Storage
   ,public menuCtrl:MenuController
    ) {
      this.menuCtrl.enable(false)
  }

 /*-------------------------------api-post-login---------------------------------*/
      //http://api-web.000webhostapp.com
      //http://space.iptvmedia.me
 apiUrl_post_Login = 'http://space.iptvmedia.me/api/login.php';
 
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
      content: 'Processing please wait...',
    });
  
   loader.present().then(() => {
  
  
    //this.http.post('http://space.iptvmedia.me/login.php',data,options)
    //this.http.post('http://127.0.0.1/iptvpay_ss/login.php',data,options)
    this.http.post('http://space.appmofix.com/api/login.php',data,options)

   /// return this.http.post('http://space.iptvmedia.me/login.php',data,options)
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
       this.navCtrl.setRoot(ProfilePage);
       // this.navCtrl.push(ProfilePage, data);
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

}
