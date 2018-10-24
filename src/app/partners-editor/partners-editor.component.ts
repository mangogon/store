import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PartnersService} from '../shared/partners.service';
import {Partners} from '../shared/partners.model';

@Component({
  selector: 'app-partners-editor',
  templateUrl: './partners-editor.component.html',
  styleUrls: ['./partners-editor.component.css']
})
export class PartnersEditorComponent implements OnInit {
partners:Partners;

  constructor(private currentRoute:ActivatedRoute, private service: PartnersService) { }

  ngOnInit() {
  let id:number = +this.currentRoute.snapshot.paramMap.get('id');
  this.partners = this.service.getById(id);
  }

}
