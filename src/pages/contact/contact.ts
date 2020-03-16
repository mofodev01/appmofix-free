import { Component } from '@angular/core';
import { NavController, NavParams , AlertController,MenuController/**/} from 'ionic-angular';


import { LoadingController } from 'ionic-angular';

import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { EmailComposer } from '@ionic-native/email-composer';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  items:any;
  data_storage:any;

  to='';
  subjet='';
  body='';
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
     public alertCtrl: AlertController,  private http: HttpClient,  public loading: LoadingController
     ,public storage: Storage
     ,public menuCtrl:MenuController
     ,private emailComposer: EmailComposer
    ) {
      this.menuCtrl.enable(true)
  }
  ionViewWillEnter(){
  
    this.storage.get("session_storage").then((res)=>{
     this.data_storage=res;
     
     console.log(this.data_storage);
/**----------------------------------------- */
let httpHeaders = new HttpHeaders({
  'Content-Type' : 'application/json',
  'Cache-Control': 'no-cache'
     });    
     let options = {
  headers: httpHeaders
     };
/**----------------------------------------- */    
  
this.http.get('http://space.appmofix.com/api/fetch_user.php?username='+this.data_storage,options)

   .subscribe(res => {
   
   
   this.items=res;
   
   console.log(this.items);
   });


///-----
})
///-----

    }

send_email(){

  this.emailComposer.isAvailable().then((available: boolean) =>{
    if(available) {
      //Now we know we can send
    }
   });
   
   let email = {
     to: 'sup.media.iptv@gmail.com',//sup.media.iptv@gmail.com
     cc: [],
     bcc: [],
     attachments: [],
    
     subject: this.subjet,
     body: this.body,
     isHtml: true,
     app: "Gmail"
   };
   
   // Send a text message using default options
   this.emailComposer.open(email);

}


  
}
