import { Component } from '@angular/core';
import { NavController, NavParams , AlertController,MenuController/**/} from 'ionic-angular';


import { LoadingController } from 'ionic-angular';

import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
  items:any;
  data_storage:any;

 
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
     public alertCtrl: AlertController,  private http: HttpClient,  public loading: LoadingController
     ,public storage: Storage
     ,public menuCtrl:MenuController
    
    ) {
      this.menuCtrl.enable(true);
      this.notification();
  }
 

  notification(){
  
  
let httpHeaders = new HttpHeaders({
  'Content-Type' : 'application/json',
  'Cache-Control': 'no-cache'
     });    
     let options = {
  headers: httpHeaders
     };
/**----------------------------------------- */    
  
this.http.get('http://space.appmofix.com/api/detail_notification.php',options)

   .subscribe(res => {
   
   
   this.items=res;
   
   console.log(this.items);
   });



    }

  
}

