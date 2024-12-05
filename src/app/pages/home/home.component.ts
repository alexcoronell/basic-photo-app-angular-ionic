import { Component, OnInit } from '@angular/core';

import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
