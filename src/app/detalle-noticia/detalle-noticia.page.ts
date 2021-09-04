import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Noticia } from '../models/noticia.model';

@Component({
  selector: 'app-detalle-noticia',
  templateUrl: './detalle-noticia.page.html',
  styleUrls: ['./detalle-noticia.page.scss'],
})
export class DetalleNoticiaPage implements OnInit {
  noticia: Noticia;
  constructor(private state: ActivatedRoute) { }

  ngOnInit() {
    this.noticia = JSON.parse(this.state.snapshot.params.noticia);
  }

}
