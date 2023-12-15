import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  standalone: true,
  styleUrls: ['./auth-layout.component.css'],
  imports: [CommonModule, RouterModule]
})
export class AuthLayoutComponent {

}
