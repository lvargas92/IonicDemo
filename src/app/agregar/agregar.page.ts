import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { Autor } from '../models/autor.model';
import { Noticia } from '../models/noticia.model';
import { AutoresService } from '../services/autores-service/autores.service';
import { NoticiasService } from '../services/noticias-service/noticias.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {
  autores: Autor[] = new Array<Autor>();
  noticia: Noticia = new Noticia();
  esEditable: boolean;

  constructor(private autorService: AutoresService,
    private noticiaService: NoticiasService,
    public loadingController: LoadingController,
    public toastController: ToastController,
    private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    if (this.activeRoute.snapshot.params.noticia !== undefined) {
      this.noticia = JSON.parse(this.activeRoute.snapshot.params.noticia);
      this.esEditable = true;
    }
    this.autorService.listarAutores().subscribe((response) => {
      this.autores = response;
    });
  }

  async guardar() {
    const loading = await this.loadingController.create({
      message: 'Guardando noticia.'
    });
    loading.present();

    this.noticia.autorID = Number(this.noticia.autorID);
    this.noticiaService.agregarNoticia(this.noticia).subscribe(() => {
      this.noticia = new Noticia();
      loading.dismiss();
      this.mostrarMensaje('Noticia Guardada');
    }, error => {
      console.log(error);
      loading.dismiss();
      this.mostrarMensaje('Ocurrio un error al Guardar');
    });
  }

  async editar() {
    const loading = await this.loadingController.create({
      message: 'Editando noticia.'
    });
    loading.present();

    this.noticia.noticiaID = Number(this.noticia.noticiaID);
    this.noticia.autorID = Number(this.noticia.autorID);
    this.noticiaService.editarNoticia(this.noticia).subscribe(() => {
      this.noticia = new Noticia();
      loading.dismiss();
      this.mostrarMensaje('Noticia Editada');
    }, error => {
      console.log(error);
      loading.dismiss();
      this.mostrarMensaje('Ocurrio un error al Editar');
    });
  }

  async mostrarMensaje(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }
}
