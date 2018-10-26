import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import {TeamService} from '../shared/team.service';
import {Team} from '../shared/team.model';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
team:Team[];

  constructor(private service:TeamService, private router: Router) { }

  ngOnInit() {
  this.team = this.service.getAll();
  }
  onCreate(){
  console.log('create');
  }
  onEdit(team:Team){
  this.router.navigate(['team','edit',team.id])
  }
  onDelete(){
  console.log('delete');
  }

}
