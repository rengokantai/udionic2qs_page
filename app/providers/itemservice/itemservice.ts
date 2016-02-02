/**
 * Created by Hernan Y.Ke on 2016/2/1.
 */
import {Injectable} from 'angular2/core';
@Injectable()
export class ItemService{
    items=['a','b','c']
    get(){
        return this.items;
    }
    addItem(item){
        this.items.push(item);
    }

    removeItem(index){
        this.items.splice(index,1);
    }
}