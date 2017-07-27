import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseProvider {

	constructor() {
		let config = {
      apiKey: "AIzaSyCL8ZmPEW9DmFgjtbwV2sjS_9KKn3kRuCI",
      authDomain: "roletando-df9b1.firebaseapp.com",
      databaseURL: "https://roletando-df9b1.firebaseio.com",
      projectId: "roletando-df9b1",
      storageBucket: "roletando-df9b1.appspot.com",
      messagingSenderId: "31712517826"
		};
		firebase.initializeApp(config);
	}

    database() {
        return firebase.database();
    }

    auth() {
        return firebase.auth();
    }

}