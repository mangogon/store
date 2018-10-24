import { Component, OnInit } from '@angular/core';

import {InformationService} from '../shared/information.service';
import {Information} from '../shared/information.model';
import {Router} from '@angular/router';


@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
information:Information[];

  constructor(private service:InformationService, private router:Router) { }

  ngOnInit() {
  this.information = this.service.getAll();
  }
  onCreate(){
  console.log('create');
  }
  onEdit(information:Information){
  this.router.navigate(['information', 'edit', information.id]);
  
  }
  onDelete(){
  
  }

}
