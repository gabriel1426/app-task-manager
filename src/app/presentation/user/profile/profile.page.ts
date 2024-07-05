import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserDetailCardComponent } from './components/user-detail-card/user-detail-card.component';
import { IonicModule } from '@ionic/angular';
import { locationOutline, timeOutline, mailOutline, callOutline } from 'ionicons/icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, UserDetailCardComponent]
})
export class ProfilePage {
  iconList = { locationOutline, timeOutline, mailOutline, callOutline };

}
