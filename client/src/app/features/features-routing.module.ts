import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../core/auth-guard.service';
import { LastPostComponent } from './last-post/last-post.component';
import { environment } from '../../environments/environment';

const routes: Routes = [{
  canActivate: [AuthGuard],
  component: LastPostComponent,
  path: environment.defaultRoute,
}];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class FeaturesRoutingModule {

  public static ROUTES = routes;

}
