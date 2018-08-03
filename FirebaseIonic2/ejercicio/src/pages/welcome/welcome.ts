import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Title } from '@angular/platform-browser';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  ejemplo: Array<{title: string}>;

  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.ejemplo = [{title:'home1'}, {title:'home2'},  {title:'home3'},  {title:'home4'}];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }
  
  

}
