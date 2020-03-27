import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController,MenuController} from 'ionic-angular';

import { JsonDataProvider } from '../../providers/json-data/json-data';

import { DetailPage } from '../detail/detail'

@Component({
  selector: 'page-liste-serve-live',
  templateUrl: 'liste-serve-live.html',
})
export class ListeServeLivePage {
  title:any;
  categorie:any;
  countries: any;
         
  errorMessage: string;

  limit = 100;

  constructor(public navCtrl: NavController, public navParams: NavParams
    , public JsonDataProvider: JsonDataProvider, public loadingCtrl: LoadingController 
    ,public menuCtrl:MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListeServeLivePage');

    this.categorie = this.navParams.get('categorie');
    console.log(this.categorie);
    this.title = this.navParams.get('title'); 
    console.log(this.title);
    
  }
  ngOnInit() {
    this.getLiveserver();
             }

  getLiveserver() {

     
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    loading.present();

    this.JsonDataProvider.getLiveserver()
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

  push_data_country_and_server(id: Number){

    this.categorie = this.navParams.get('categorie');
    this.title = this.navParams.get('title'); 

    this.navCtrl.push(DetailPage,{categorie: this.categorie,title: this.title,id: id});
  }

}
