import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Autor } from 'src/app/models/autor.model';

@Injectable({
  providedIn: 'root'
})
export class AutoresService {

  constructor(public http: HttpClient) { }

  listarAutores(): Observable<Autor[]> {
    return this.http.get<Autor[]>('https://localhost:5001/api/autor');
  }
}
