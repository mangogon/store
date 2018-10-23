import {Injectable} from '@angular/core';
import {Information} from './information.model';

@Injectable()
export class InformationService {

data: Information[] = [
{id:1, city:'Lviv', company: 'our store'}

];
getAll():Information[]{
return this.data;
}
getById(id:number): Information{
return this.data.find(x=>x.id==id);
}
update(information:Information){
let toUpdate = this.getById(information.id);
Object.assign(toUpdate, information);
}
create(information:Information){
this.data.push(information);
}
delete(information:Information){
let toDelete=this.getById(information.id);
this.data.splice(this.data.indexOf(information), 1);
}
}