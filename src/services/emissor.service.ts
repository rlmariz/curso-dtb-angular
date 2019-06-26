import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment} from '../environments/environment'
import { EmissorModel } from 'src/models/emissor.model';


@Injectable({
  providedIn: 'root'
})
export class EmissorService {

  constructor(private httpClient : HttpClient) { }

  get(cnpj: string): Observable<EmissorModel>{
    return this.httpClient.get<EmissorModel>(`${environment.apiUrl}/emissor/${cnpj}`);
  }
}
