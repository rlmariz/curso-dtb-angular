import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosListComponent } from './usuarios-list/usuarios-list.component';

import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NotaListComponent } from './nota-list/nota-list.component';
import { NotaNovaComponent } from './nota-nova/nota-nova.component';
import { NotaItensComponent } from './nota-itens/nota-itens.component'

@NgModule({
  declarations: [
    AppComponent,
    UsuariosListComponent,
    NotaListComponent,
    NotaNovaComponent,
    NotaItensComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
