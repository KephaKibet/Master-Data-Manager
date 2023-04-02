import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';


@Component({
  selector: 'mdm-new-creation',
  templateUrl: './new-creation.component.html',
  styleUrls: ['./new-creation.component.css']
})
export class NewCreationComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    
  }
  
  onLogin(loginForm: NgForm) {
    console.log(loginForm.value);
  }

}
