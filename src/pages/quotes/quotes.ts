import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit{
  quoteGroup: {category: string, quotes: Quote[], icon: string};

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController) {
    
  }

  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotesPage');
    //this.quoteGroup = this.navParams.data;
    //Add elvis operator(?) to use this approch
  }

  onAddToFavorite(selectedQuote: Quote) {
      const alert = this.alertCtrl.create({
        title: 'Add Quote',
        subTitle: 'Are you sure?',
        message: 'Are you sure to add the quote to Fav?',
        buttons: [
          {
            text: 'Yes',
            handler: () => {
              console.log('ok');
            }
          },
          {
            text: 'No',
            role: 'cancel',
            handler: () => {
              console.log('no');
            }
          },
        ]
      });

      alert.present();
  } 
    

}
