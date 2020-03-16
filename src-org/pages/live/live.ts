import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController,MenuController} from 'ionic-angular';

import { JsonDataProvider } from '../../providers/json-data/json-data';
import { DetailPage } from '../detail/detail'

/**
 https://angular.io/guide/http
 */

@Component({
  selector: 'page-live',
  templateUrl: 'live.html',
})
export class LivePage {
  countries: any;
         
  errorMessage: string;

  limit = 100;



  constructor(public navCtrl: NavController, public navParams: NavParams
    , public JsonDataProvider: JsonDataProvider, public loadingCtrl: LoadingController 
    ,public menuCtrl:MenuController
    ) {
      this.menuCtrl.enable(true)
  }

  ngOnInit() {
    this.getLiveCountry();
             }

  getLiveCountry() {

     
    let loading = this.loadingCtrl.create({
      content: 'Wait...'
    });
  
    loading.present();

    this.JsonDataProvider.getLiveCountry()
             .subscribe(
               countries =>{
                 this.countries = countries 
                     loading.dismiss();
                           } ,
               error => {
                 this.errorMessage = <any>error
                    loading.dismiss();
                        });
  
   }

   doInfinite(infiniteScrollEvent) {
    this.limit += 20;
    infiniteScrollEvent.complete();
    infiniteScrollEvent.disabled = true;
}


push_data_country(categorie: String,title: String){
  this.navCtrl.push(DetailPage,{categorie: categorie,title: title});
}

}
