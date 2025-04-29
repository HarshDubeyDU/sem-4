import { Component } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-form-validation',
    imports: [
        FormsModule,
        NgIf,
        NgClass
    ],
  templateUrl: './form-validation.component.html',
  styleUrl: './form-validation.component.css'
})
export class FormValidationComponent {
    onSubmit(form: NgForm) {
        console.log(form);
        if (form.valid) {
            alert("Form is valid");
        } else {
            alert('Form is invalid');
        }
    }
}
