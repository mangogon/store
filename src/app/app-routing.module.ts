import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{ProductsComponent} from './products/products.component';
import{TeamComponent} from './team/team.component';
import{InformationComponent} from './information/information.component';
import{PartnersComponent} from './partners/partners.component';
import{PartnersEditorComponent} from './partners-editor/partners-editor.component';
import{ProductsEditorComponent} from './products-editor/products-editor.component';


const routes: Routes = [
{path: 'products', component: ProductsComponent},
{path: 'team', component: TeamComponent},
{path: 'information', component: InformationComponent},
{path: 'partners', component: PartnersComponent},
{path: 'partners/edit/:id', component: PartnersEditorComponent},
{path: 'products/edit/:id', component: ProductsEditorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
