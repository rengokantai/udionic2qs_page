/**
 * Created by Hernan Y.Ke on 2016/1/30.
 */
import {Page, NavController} from 'ionic-framework/ionic';
import {ListPage} from '../listpage/listpage';
@Page({
    templateUrl: 'build/pages/page4/page4.html'
})

export class Page4{
    title = "page";
    nav;
    constructor(nav: NavController){
        this.nav = nav;
    }
    addPage(){
        this.nav.push(ListPage)
    }
}