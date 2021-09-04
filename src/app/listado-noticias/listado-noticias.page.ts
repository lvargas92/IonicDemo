import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Noticia } from '../models/noticia.model';
import { NoticiasService } from '../services/noticias-service/noticias.service';

@Component({
  selector: 'app-listado-noticias',
  templateUrl: './listado-noticias.page.html',
  styleUrls: ['./listado-noticias.page.scss'],
})
export class ListadoNoticiasPage implements OnInit {
  noticias: Noticia[];
  constructor(private noticiasService: NoticiasService, private route: Router) { }

  ngOnInit() {
    this.noticiasService.verNoticias().subscribe((noticia) => {
      this.noticias = noticia;
    }, (error) => {
      console.log(error);
    });
  }

  verDetalle(noticia: Noticia) {
    this.route.navigate(['detalle-noticia', { noticia: JSON.stringify(noticia) }]);
  }

  eliminarNoticia(noticiaID: number, indice: number) {
    this.noticiasService.eliminarNoticia(noticiaID).subscribe(() => {
      this.noticias.splice(indice, 1);
    }, error => {
      console.log(error);
    });
  }

  editarNoticia(noticia: Noticia) {
    this.route.navigate(['/agregar', { noticia: JSON.stringify(noticia) }]);
  }
}
