import { Component, inject } from '@angular/core';

import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton, IonFab, IonFabButton, IonIcon, IonImg, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';

import { PhotosService } from 'app/services/photos.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton, IonFab, IonFabButton, IonIcon, IonImg, IonGrid, IonRow, IonCol]
})
export class GalleryComponent {
  photosService = inject(PhotosService)

  photos: string[] = []

  constructor(){
    this.photos = this.photosService.photos;
  }

  async takePhoto() {
    await this.photosService.addNewPhoto()
  }

}
