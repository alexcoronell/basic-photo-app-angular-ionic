import { Component, OnInit } from '@angular/core';

import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent]
})
export class DetailComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
