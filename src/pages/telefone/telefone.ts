import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TelefoneService } from '../../service/telefone.service';
import { Telefone } from '../../model/telefone';

/**
 * Generated class for the TelefonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-telefone',
  templateUrl: 'telefone.html',
})
export class TelefonePage {

  telefone : Telefone[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
          public service : TelefoneService) {
  }

  ionViewDidLoad() {
    this.service.getTelefone()
    .subscribe( response => {
      this.telefone = response;
    });
    
  }

}
