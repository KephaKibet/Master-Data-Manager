import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SatPopoverModule } from '@ncstate/sat-popover';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css'],
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule,CommonModule, RouterModule, MatTooltipModule,SatPopoverModule ],
})
export class MainLayoutComponent {

}
