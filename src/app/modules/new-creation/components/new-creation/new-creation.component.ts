import { Component } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http/httpservice.service';

@Component({
  selector: 'app-new-creation',
  templateUrl: './new-creation.component.html',
  styleUrls: ['./new-creation.component.css']
})
export class NewCreationComponent {
  constructor(
    private httpservice:HttpService
  ) {
   
  }
}
