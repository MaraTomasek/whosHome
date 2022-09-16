import {Injectable} from '@angular/core';
import {User} from "../model/user.model";

@Injectable({
  providedIn: 'root'
})
export class StateService {
  stateFilePath = "../../assets/state.json";

  constructor() {
  }

  saveState(users: User[]) {
    for (let user in users) {
      console.log(user);
    }
  }
}
