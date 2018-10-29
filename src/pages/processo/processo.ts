import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
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
  processoPage : Processo[] =[];
  page : number = 0;


  constructor(public navCtrl: NavController, public navParams: NavParams,
              public service : ProcessoService,
              public loading : LoadingController) {
  }


  ionViewDidLoad() {
    this.getProcesso();
  }
   
  getProcesso(){
    this.service.getProcesso()
  .subscribe( response => {
    this.processo = response;
    this.addPage();
    });
   
  }
  addPage(){
    for(var i = 0; i < 10; i++){
      this.processoPage.push(this.processo[this.page]);
      this.page++;
    }
    console.log(this.processoPage);
  }
  doRefresh(refresher) {
    this.processoPage = [];
    setTimeout(() => {
     this.getProcesso();
     refresher.complete();
    }, 2000);
  }
  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {

      this.addPage();
      infiniteScroll.complete();
    }, 500);
  }

}