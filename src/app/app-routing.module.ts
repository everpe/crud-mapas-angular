import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
  PreloadAllModules,
} from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        redirectTo: 'crud',
        pathMatch: 'full',
      },
      {
        path: 'crud',
        loadChildren: () =>
          import('./general/crud/crud.module').then((m) => m.CrudModule),
      },
      {
        path: 'maps',
        loadChildren: () => import('./maps/maps.module').then((m) => m.MapsModule),
      },
    ],
  },
  {
    path: '**',
    loadChildren: () =>
      import('./general/page-not-found/page-not-found.module').then(
        (m) => m.PageNotFoundModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
