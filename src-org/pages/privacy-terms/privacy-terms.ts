import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the PrivacyTermsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-privacy-terms',
  templateUrl: 'privacy-terms.html',
})
export class PrivacyTermsPage {

  seg:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.seg = "privacy";


}
}
