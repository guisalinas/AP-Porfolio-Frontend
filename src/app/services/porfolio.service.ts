import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PorfolioService {

  constructor(private http:HttpClient) { }

  getData():Observable<any>{
    //en lugar del 'json' iria la url para el servidor web
    return this.http.get('./assets/data/dataprueba.json');
  }
}
