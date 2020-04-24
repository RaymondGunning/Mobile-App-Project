import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = 
[
  { 
    path: '', redirectTo: 'home', pathMatch: 'full' 
  },
  {
     path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'movies',loadChildren: () => import('./movies/movies.module').then( m => m.MoviesPageModule)
  },
  {
    path: 'shows',loadChildren: () => import('./shows/shows.module').then( m => m.ShowsPageModule)
  },
  {
    path: 'upcoming',
    loadChildren: () => import('./upcoming/upcoming.module').then( m => m.UpcomingPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
