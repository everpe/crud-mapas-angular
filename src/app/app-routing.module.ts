import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
  PreloadAllModules,
} from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: "",
    component: AppComponent,
    children: [
      {
        path: '',
        redirectTo: '/crud',
        pathMatch: 'full',
      },
      {
        path: "mapas",
        loadChildren: () =>
          import("./maps/maps.module").then(
            (m) => m.MapsModule
          ),
      },
      {
        path: "crud",
        loadChildren: () =>
          import("./general/crud-users/crud-users.module").then(
            (m) => m.CrudUsersModule
          ),
      },
    ],
  },
  {
    path: '**',
    loadChildren: () =>
      import(
        './general/page-not-found/page-not-found.module'
      ).then((m) => m.PageNotFoundModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
