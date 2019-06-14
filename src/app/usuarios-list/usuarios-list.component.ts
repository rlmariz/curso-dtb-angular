import { Component, OnInit } from '@angular/core';
import {usuarios} from '../../models/usuarios.model';

@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.less']
})
export class UsuariosListComponent implements OnInit {

  usuarios = usuarios;

  constructor() { }

  ngOnInit() {
  }

}
