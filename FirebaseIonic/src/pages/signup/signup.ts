import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { AngularFireAuth } from 'angularfire2/auth';
import { Authentication } from '../../services/authentication';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  email: string = "curso@gmail.com";
  password: string;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private auth: Authentication
    
    //private angularFire : AngularFireAuth
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  createAccount() {
    this.auth.createUserWithEmailAndPassword(this.email, this.password);
  }
  createAccountWithGoogle(){
    this.auth.crearUsuarioGoogle();
  }

  createAccountWithFacebook(){
    this.auth.crearUsuarioFacebook();
  }
}
