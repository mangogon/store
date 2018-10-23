import {Injectable} from '@angular/core';
import {Partners} from './partners.model';

@Injectable()
export class PartnersService {

data: Partners[] = [
{id:1, name:'Lilu', city: 'Lviv', liberal:false},
{id:2, name:'Akil', city: 'Tokio', liberal:true},
{id:3, name:'Lotos', city: 'Paris', liberal:true},

];
getAll():Partners[]{
return this.data;
}
getById(id:number): Partners{
return this.data.find(x=>x.id==id);
}
update(partners:Partners){
let toUpdate = this.getById(partners.id);
Object.assign(toUpdate, partners);
}
create(partners:Partners){
this.data.push(partners);
}
delete(partners:Partners){
let toDelete=this.getById(partners.id);
this.data.splice(this.data.indexOf(partners), 1);
}
}