import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginInterface } from '../../interfaces/login.interface';
import { NotificationService } from '../notification/notification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private notificationService:NotificationService,
    private router: Router,
  ) { }

  login(user: LoginInterface){
    const storedEmail = 'user@mdm.com';
    const storedPassword ='password';

    if(user.email !== storedEmail || user.password  !== storedPassword){
      this.notificationService.showError({message: 'Wrong Email or Password'});
      return;
    }

    // save the user to Local storage
    this.saveUser(user);

    // notify user they're logged in
    this.notificationService.showSuccess({message:'Login Successful'});
    // redirect user to materials search
    this.router.navigate(['/material-catalogue-search']);

  }

  saveUser(user: {email: string}){
    // save user to local storage
    localStorage.setItem('user',user.email);
  }

  currentUserExists(): boolean{
    // get user from local storage
      const userInLocalStorage = localStorage.getItem('user');
    let userExists = false;
    if(userInLocalStorage){
      // Save User to state
      this.saveUser({email:userInLocalStorage});
      userExists = true;
    }
    return userExists;
  }

  logout(){
    // clear local storage to remove user
    localStorage.clear();

    // redirect user to login page
    this.router.navigate(['/login']);

  }
}
