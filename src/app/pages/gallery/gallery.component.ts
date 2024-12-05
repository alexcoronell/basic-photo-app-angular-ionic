import { Component, OnInit } from '@angular/core';

import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent]
})
export class GalleryComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
