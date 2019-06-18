import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../models/usuario.model';
import {UsuarioService} from '../../services/usuario.service';

@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.less']
})
export class UsuariosListComponent implements OnInit {

  usuarios: Usuario[] = [];
  usuario: any = {};

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuario.nome = 'Maria';
    this.usuarioService.getAll().subscribe(u => {
        this.usuarios = u;
    });
  }

  salvar(): void {
      this.usuario.nome = 'João';
      window.alert('Salvando....');
  }
}
