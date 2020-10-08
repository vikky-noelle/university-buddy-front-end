import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseHomeComponent } from './home/base-home/base-home.component';
import { TeacherHomeComponent } from './home/teacher-home/teacher-home.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';
import { BaseHeaderComponent } from './header/base-header/base-header.component';
import { BaseFooterComponent } from './footer/base-footer/base-footer.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { MainHeaderComponent } from './header/main-header/main-header.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseHomeComponent,
    TeacherHomeComponent,
    HomeComponent,
    PageNotFoundComponent,
    BaseHeaderComponent,
    BaseFooterComponent,
    AboutPageComponent,
    MainHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
