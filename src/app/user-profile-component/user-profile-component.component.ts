import { Component } from '@angular/core';
import { User } from '../model/user.model';

@Component({
  selector: 'app-user-profile-component',
  templateUrl: './user-profile-component.component.html',
  styleUrls: ['./user-profile-component.component.css']
})

export class UserProfileComponentComponent {
  user: User = new User("ETOUMI", "Aristide", "https://thumbs.dreamstime.com/b/avant-de-portrait-d-illusion-optique-avec-le-profil-coup%C3%A9-d-un-homme-50989009.jpg")

  getFullName(user: User) {
    return user.firstName + " " + user.lastName
  }
}


