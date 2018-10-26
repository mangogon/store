import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TeamService} from '../shared/team.service';
import {Team} from '../shared/team.model';

@Component({
  selector: 'app-team-editor',
  templateUrl: './team-editor.component.html',
  styleUrls: ['./team-editor.component.css']
})
export class TeamEditorComponent implements OnInit {
team:Team;

  constructor(private currentRoute:ActivatedRoute, private service: TeamService) { }

  ngOnInit() {
  let id:number = +this.currentRoute.snapshot.paramMap.get('id');
  this.team = this.service.getById(id);
  }

}
