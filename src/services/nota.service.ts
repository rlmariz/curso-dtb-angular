import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Nota } from '../models/nota.model';
import { EntityResult } from '../models/entity.model';
import { environment} from '../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class NotaService {

  constructor(private httpClient : HttpClient) { }

  getAll(): Observable<EntityResult<Nota>>{
    return this.httpClient.get<EntityResult<Nota>>(`${environment.apiUrl}/notafiscal`);
  }
}
