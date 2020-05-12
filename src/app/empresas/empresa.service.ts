import { Injectable } from '@angular/core';
import { EMPRESAS } from './empresas.json';
import { Empresa } from './empresa';
import { of, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class EmpresaService {

    private urlEndPoint: string  = 'http://localhost:8080/api/regempresas';

    private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

    constructor(private http: HttpClient) { }

    getEmpresas(): Observable <Empresa[]>{

        return this.http.get<Empresa[]>(this.urlEndPoint);
    }

    create(empresa: Empresa) : Observable<Empresa> {
        return this.http.post<Empresa>(this.urlEndPoint, empresa, {headers: this.httpHeaders})
      }
}