import { Component, Input, OnInit } from '@angular/core';
import { IonCard, IonLabel, IonIcon } from "@ionic/angular/standalone";
import { addIcons } from "ionicons";

@Component({
  selector: 'app-user-detail-card',
  templateUrl: './user-detail-card.component.html',
  styleUrls: ['./user-detail-card.component.scss'],
  standalone: true,
  imports: [IonIcon, IonCard, IonLabel]
})
export class UserDetailCardComponent implements OnInit {

  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() icon: string = '';
  @Input() iconList = {};
 
  ngOnInit(): void {
    addIcons(this.iconList);
  }
}
