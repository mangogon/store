import {Injectable} from '@angular/core';
import {Team} from './team.model';

@Injectable()
export class TeamService {

data: Team[] = [
{id:1, members:'Fruits'},

];
getAll():Team[]{
return this.data;
}
getById(id:number): Team{
return this.data.find(x=>x.id==id);
}
update(team:Team){
let toUpdate = this.getById(team.id);
Object.assign(toUpdate, team);
}
create(team:Team){
this.data.push(team);
}
delete(team:Team){
let toDelete=this.getById(team.id);
this.data.splice(this.data.indexOf(team), 1);
}
}