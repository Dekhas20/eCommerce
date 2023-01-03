import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules, PreloadingStrategy } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { CustomPreloadService } from "./services/custom-preload.service";

import { AdminGuard } from "./guards/admin.guard";

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./website/website.module').then((m) => m.WebsiteModule  ),

  },
  {
    path: 'cms',
    canActivate: [AdminGuard],
    loadChildren: () => import('./cms/cms.module').then((m) => m.CmsModule),
    data: {
      preload: true
    }
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: CustomPreloadService
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
