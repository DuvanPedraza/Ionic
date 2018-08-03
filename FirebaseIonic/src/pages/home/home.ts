import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Authentication} from '../../services/authentication';
import { Uploader } from '../../services/files';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //definir archivo
  files : any;
  constructor(public navCtrl: NavController, public auth: Authentication, public uploader : Uploader) {

  }
  //cargar archivos
  fileChange(ev){
    this.files=ev.target.files
    
  }

  submit(){
    if (this.fileChange.length<=0)
    this.uploader.uploadMultiple(this.files);
  }

}
