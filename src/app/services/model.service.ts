import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { person } from 'src/assets/data/model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  model_url = 'http://localhost:8080/api/person';

  constructor(private http:HttpClient) {}

  public getPerson(): Observable<person> {
    return this.http.get<person>(this.model_url+ '/1')
  }
}
