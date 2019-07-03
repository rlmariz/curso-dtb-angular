import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosListComponent } from './usuarios-list/usuarios-list.component';
import { NotaListComponent } from './nota-list/nota-list.component';
import { NotaNovaComponent } from './nota-nova/nota-nova.component';
import { NotaItensComponent } from './nota-itens/nota-itens.component';

const routes: Routes = [
  {path: 'usuarios', component: UsuariosListComponent},
  {path: 'notafiscal', component: NotaListComponent},
  {path: 'nota-nova', component: NotaNovaComponent},
  {path: 'nota-itens/:id', component: NotaItensComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
