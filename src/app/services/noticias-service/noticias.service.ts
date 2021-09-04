import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Noticia } from 'src/app/models/noticia.model';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(public http: HttpClient) { }

  verNoticias(): Observable<Noticia[]> {
    return this.http.get<Noticia[]>('https://localhost:5001/api/noticia/');
  }

  eliminarNoticia(noticiaID: number): Observable<boolean> {
    return this.http.delete<boolean>('https://localhost:5001/api/noticia/eliminar/' + noticiaID);
  }

  agregarNoticia(noticia: Noticia): Observable<boolean> {
    return this.http.post<boolean>('https://localhost:5001/api/noticia/agregar/', noticia);
  }

  editarNoticia(noticia: Noticia): Observable<boolean> {
    return this.http.put<boolean>('https://localhost:5001/api/noticia/editar/', noticia);
  }
}
