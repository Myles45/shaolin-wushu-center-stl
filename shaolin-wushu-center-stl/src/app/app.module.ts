import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ClassesComponent } from './components/classes/classes.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { LineageComponent } from './components/lineage/lineage.component';
import { InstructorComponent } from './components/instructor/instructor.component';
import { LionDanceComponent } from './components/lion-dance/lion-dance.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ClassesComponent,
    GalleryComponent,
    LineageComponent,
    InstructorComponent,
    LionDanceComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
