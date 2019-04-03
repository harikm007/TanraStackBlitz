import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { HomeComponent } from 'src/app/home/home.component';
import { ServicesComponent } from 'src/app/services/services.component';
import { GalleryComponent } from 'src/app/gallery/gallery.component';
import { ContactUsComponent } from 'src/app/contact-us/contact-us.component';
import { AdminHomeComponent } from 'src/app/admin-home/admin-home.component';

const routes:Routes=[
  {path:'home', component:HomeComponent},
  {path:'services', component:ServicesComponent},
  {path:'gallery', component:GalleryComponent},
  {path:'contactus', component:ContactUsComponent},
  {path:'adminhome', component:AdminHomeComponent},
  {path:'', component:HomeComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
