import { Component, OnInit } from '@angular/core';

import {PartnersService} from '../shared/partners.service';
import {Partners} from '../shared/partners.model';
import {Router} from '@angular/router';


@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {
partners:Partners[];

  constructor(private service:PartnersService, private router:Router) { }

  ngOnInit() {
  this.partners = this.service.getAll();
  }
  onCreate(){
  console.log('create');
  }
  onEdit(partners:Partners){
  this.router.navigate(['partners', 'edit', partners.id]);
  
  }
  onDelete(){
  
  }

}
