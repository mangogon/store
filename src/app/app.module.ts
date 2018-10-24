import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductsService} from './shared/products.service';
import { TeamService} from './shared/team.service';
import { TeamComponent } from './team/team.component';
import { InformationComponent } from './information/information.component';
import { InformationService} from './shared/information.service';
import { PartnersService} from './shared/partners.service';

import { PartnersComponent } from './partners/partners.component';
import { PartnersEditorComponent } from './partners-editor/partners-editor.component';
import { ProductsEditorComponent } from './products-editor/products-editor.component';
import { InformationEditorComponent } from './information-editor/information-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    TeamComponent,
    InformationComponent,
    PartnersComponent,
    PartnersEditorComponent,
    ProductsEditorComponent,
    InformationEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductsService, TeamService, InformationService, PartnersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
