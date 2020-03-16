import { Component , ViewChild } from '@angular/core';
import { NavController, NavParams , AlertController,MenuController} from 'ionic-angular';

import { LoginPage } from '../login/login';
import { LoadingController } from 'ionic-angular';

import { HttpClient,HttpHeaders  } from '@angular/common/http';

/**
 * Generated class for the RecoveryPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-recovery-password',
  templateUrl: 'recovery-password.html',
})
export class RecoveryPasswordPage {

  @ViewChild("email") email;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController,  private http: HttpClient,  public loading: LoadingController
    ,public menuCtrl:MenuController) {
    this.menuCtrl.enable(false)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecoveryPasswordPage');
    
  }

  Register(){
   
   
   if(this.email.value==""){
  
   let alert = this.alertCtrl.create({
  
   title:"Warning",
   subTitle:"The Email field is empty",
   buttons: ['OK']
   });
  
   alert.present();
        
  }
   else {
  
  
     let httpHeaders = new HttpHeaders({
       'Content-Type' : 'application/json',
       'Cache-Control': 'no-cache'
          });      
          let options = {
       headers: httpHeaders
          };
  
    let data = {
          
          email: this.email.value    
        };
  
  
   let loader = this.loading.create({
      content: 'Attendez...',
    });
  
   loader.present().then(() => {

  this.http.post('http://space.appmofix.com/api/Password_Recovery.php',data, options)
  //this.http.post('http://127.0.0.1/i/api/register.php',data, options)
  .map(res => res.toString())
  .subscribe(res => {
  
   loader.dismiss()
  if(res=="email valide"){
    let alert = this.alertCtrl.create({
      title:"Operation completed successfully",
      subTitle:"Visit your email to check the message we sent you",
      buttons: ['OK']
      });
     
      alert.present();
   this.navCtrl.push(LoginPage);
  
  }else
  {
   let alert = this.alertCtrl.create({
   title:"Sorry",
   subTitle:"I do not know you",
   buttons: ['OK']
   });
  
   alert.present();
    } 
  });
  });
   }
  
  }
}
