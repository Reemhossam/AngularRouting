import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IDeactivateComponent } from '../Services/authGuard.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements IDeactivateComponent{
firstName:string = '';
lastName:string = '';
country:string = 'usa';
message:string = '';

isSubmitted:boolean = false;
onSubmit(){
  this.isSubmitted = true;
}
canExit() : boolean {


  if ((this.firstName || this.lastName || this.message) && (!this.isSubmitted))
    if (!confirm("Do you wish to Please confirm"))
      return false
    return true
}

}
