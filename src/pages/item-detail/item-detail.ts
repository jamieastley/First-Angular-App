import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ItemDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html',
})
export class ItemDetailPage {

	title;
	description;
	category;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
	console.log('ionViewDidLoad ItemDetailPage');
	
	this.title = this.navParams.get('item').title;
	this.description = this.navParams.get('item').description;
	this.category = this.navParams.get('item').category;
  }

}
