import { Component, OnInit } from '@angular/core';

import {ProductsService} from '../shared/products.service';
import {Products} from '../shared/products.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products:Products[];

  constructor(private service:ProductsService, private router:Router) { }

  ngOnInit() {
  this.products = this.service.getAll();
  }
  onCreate(){
  console.log('create');
  }
  onEdit(products:Products){
  this.router.navigate(['products', 'edit', products.id])
  }
  onDelete(){
  console.log('delete');
  }

}
