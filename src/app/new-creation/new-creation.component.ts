import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';


@Component({
  selector: 'mdm-new-creation',
  templateUrl: './new-creation.component.html',
  styleUrls: ['./new-creation.component.css']
})
export class NewCreationComponent implements OnInit {

  constructor() { 
    let ERPNumber:string;
  }
  ngOnInit(): void {
    
  }
  
  onNewMaterialCreation(newMaterialForm: NgForm) {
    console.log(newMaterialForm.value);
  }

}
