import {Injectable} from '@angular/core';
import {Products} from './products.model';

@Injectable()
export class ProductsService {

data: Products[] = [
{id:1, name:'Fruits', popular:true},
{id:2, name:'Meat', popular:false},
{id:3, name:'Milk', popular:true}

];
getAll():Products[]{
return this.data;
}
getById(id:number): Products{
return this.data.find(x=>x.id==id);
}
update(products:Products){
let toUpdate = this.getById(products.id);
Object.assign(toUpdate, products);
}
create(products:Products){
this.data.push(products);
}
delete(products:Products){
let toDelete=this.getById(products.id);
this.data.splice(this.data.indexOf(products), 1);
}
}