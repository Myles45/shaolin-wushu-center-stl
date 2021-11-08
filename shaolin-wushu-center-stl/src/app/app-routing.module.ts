import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ClassesComponent } from './components/classes/classes.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HomeComponent } from './components/home/home.component';
import { InstructorComponent } from './components/instructor/instructor.component';
import { LineageComponent } from './components/lineage/lineage.component';
import { LionDanceComponent } from './components/lion-dance/lion-dance.component';

const routes: Routes = [
  {path:'about', component: AboutComponent},
  {path:'classes', component: ClassesComponent},
  {path:'gallery', component: GalleryComponent},
  {path:'', component: HomeComponent},
  {path:'instructor', component: InstructorComponent},
  {path:'lineage', component: LineageComponent},
  {path:'lion-dance', component: LionDanceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
