import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Processo } from '../../model/processo';
import { ProcessoService } from '../../service/processo.service';

/**
 * Generated class for the ProcessoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-processo',
  templateUrl: 'processo.html',
})
export class ProcessoPage {

  processo : Processo[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public service : ProcessoService) {
  }

  ionViewDidLoad() {
    this.service.getProcesso()
    .subscribe( response => {
      this.processo = response;
    });

  }

}