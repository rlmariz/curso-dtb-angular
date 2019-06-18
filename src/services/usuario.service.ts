import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';
import { environment} from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient : HttpClient) { }

  getAll(): Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(`${environment.apiUrl}/usuario`);
  }
}

