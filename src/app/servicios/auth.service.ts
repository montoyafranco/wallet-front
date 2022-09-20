import { Injectable } from '@angular/core';
import {Auth, signInWithPopup, GoogleAuthProvider,signOut, User} from '@angular/fire/auth'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) { }
}
