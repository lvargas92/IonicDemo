import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listado-noticias',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  },
  {
    path: 'listado-noticias',
    loadChildren: () => import('./listado-noticias/listado-noticias.module').then(m => m.ListadoNoticiasPageModule)
  },
  {
    path: 'detalle-noticia',
    loadChildren: () => import('./detalle-noticia/detalle-noticia.module').then(m => m.DetalleNoticiaPageModule)
  },
  {
    path: 'agregar',
    loadChildren: () => import('./agregar/agregar.module').then(m => m.AgregarPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
