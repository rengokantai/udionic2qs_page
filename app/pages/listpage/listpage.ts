/**
 * Created by Hernan Y.Ke on 2016/1/30.
 */
import {Page, NavController,NavParams} from 'ionic-framework/ionic';

@Page({
    templateUrl: 'build/pages/listpage/listpage.html'
})

export class ListPage{
    items;
    constructor(navParams:NavParams){
        this.items = navParams.get('items');
    }
}
