import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Nota } from '../models/nota.model';
import { EntityResult } from '../models/entity.model';
import { environment} from '../environments/environment'
import { ItemModel } from 'src/models/item.model';


@Injectable({
  providedIn: 'root'
})
export class NotaService {


  constructor(private httpClient : HttpClient) { }


  getAll(): Observable<EntityResult<Nota>>{
    return this.httpClient.get<EntityResult<Nota>>(`${environment.apiUrl}/notafiscal`);
  }

  salve(nota: Nota): Observable<Nota> {
    return this.httpClient.post<Nota>(`${environment.apiUrl}/notafiscal`, nota);
  }

  getItens(notaId: number):Observable<ItemModel[]>{
    return this.httpClient.get<ItemModel[]>(`${environment.apiUrl}/notafiscal/${notaId}/itens`);
  }
}
