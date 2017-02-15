import {Routes} from "@angular/router";
import {SiteAComponent} from "./site-a/site-a.component";
import {SiteBComponent} from "./site-b/site-b.component";

export const appRoutes: Routes = [
  {path: 'site-a', component: SiteAComponent},
  {path: 'site-b', component: SiteBComponent},
  {path: '**', redirectTo: '/site-a'}
];
