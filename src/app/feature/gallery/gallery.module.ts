import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { GalleryRoutingModule } from './gallery-routing.module';
import {GalleryComponent } from './gallery.component';

@NgModule({
  declarations: [GalleryComponent],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    IonicModule
    
  ]
})
export class GalleryModule { }
