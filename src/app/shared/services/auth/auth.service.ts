import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { setAuthAction } from 'src/app/STATE/auth/auth.actions';
import { Router } from '@angular/router';
import { LoginInterface } from '../../interfaces/login.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private store: Store,
    private router: Router,
  ) { }

  login(user: LoginInterface){
    // const storedEmail = 'kk@gmail.com';
    // const storedPassword ='Password';


    // save the user to state and Local storage
    this.saveUser(user);

    // notify user they're logged in

    // redirect user to home page
    this.router.navigate(['/material-search']);

  }

  saveUser(user: {email: string}){
    // save user to state
    this.store.dispatch(setAuthAction({auth: user}));
    // save user to local storage
    localStorage.setItem('user',user.email);
  }

  currentUserExists(): boolean{
    // get user from local storage and save to state
      const userInLocalStorage = localStorage.getItem('user');
    let userExists = false;
    if(userInLocalStorage){
      // Save User to state
      this.saveUser({
        email: userInLocalStorage
      });
      userExists = true;
    }
    return userExists;
  }

  logout(){
    // set user state to null
    this.store.dispatch(setAuthAction({auth:null}));

    // clear local storage to remove user
    localStorage.clear();

    // redirect usee to login page
    this.router.navigate(['/login']);

  }
}
