/**
 * Created by Hernan Y.Ke on 2016/1/30.
 */
import {Page, NavController, NavParams} from 'ionic-framework/ionic';
import {ListPage} from '../listpage/listpage';
import {ItemService} from '../../providers/itemservice/itemservice';
@Page({
    providers:[ItemService],
    templateUrl: 'build/pages/page4/page4.html'
})

export class Page4{
    title = "page";
    nav;
    items;
    constructor(nav: NavController,navParams:NavParams,itemService:ItemService){
        this.nav = nav;
        this.items=itemService.get();
    }
    addPage(){
        this.nav.push(ListPage,{items:this.items})
    }
}