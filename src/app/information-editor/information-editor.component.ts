import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {InformationService} from '../shared/information.service';
import {Information} from '../shared/information.model';

@Component({
  selector: 'app-information-editor',
  templateUrl: './information-editor.component.html',
  styleUrls: ['./information-editor.component.css']
})
export class InformationEditorComponent implements OnInit {
information:Information;

  constructor(private currentRoute:ActivatedRoute, private service: InformationService) { }

  ngOnInit() {
  let id:number = +this.currentRoute.snapshot.paramMap.get('id');
  this.information = this.service.getById(id);
  }
  
  

}
