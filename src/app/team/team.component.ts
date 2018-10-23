import { Component, OnInit } from '@angular/core';

import {TeamService} from '../shared/team.service';
import {Team} from '../shared/team.model';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
team:Team[];

  constructor(private service:TeamService) { }

  ngOnInit() {
  this.team = this.service.getAll();
  }

}
