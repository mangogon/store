import { Component, OnInit } from '@angular/core';

import {InformationService} from '../shared/information.service';
import {Information} from '../shared/information.model';


@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
information:Information[];

  constructor(private service:InformationService) { }

  ngOnInit() {
  this.information = this.service.getAll();
  }

}
