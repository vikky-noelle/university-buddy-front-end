import { AboutPageComponent } from './about-page/about-page.component';
import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent }, //home page
  { path: 'about', component: AboutPageComponent },
  { path: '**', component: PageNotFoundComponent }, //404 error page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
