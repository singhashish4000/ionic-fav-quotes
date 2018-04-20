import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import  quotes  from '../../data/quotes';
import { QuotesPage } from '../quotes/quotes';

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit{

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LibraryPage');
  }

  quoteCollection: {category: string, quotes: Quote[], icon: string}[];
  quotesPage=QuotesPage;


  ngOnInit(){
    this.quoteCollection = quotes;
    console.log(this.quoteCollection);
  }
  
  itemSelected(item: string) {
    console.log("Selected Item", item);
  }



}
