import { Component } from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'toggle-message',
    imports: [
        NgIf
    ],
  templateUrl: './toggle-message.component.html',
  styleUrl: './toggle-message.component.css'
})
export class ToggleMessageComponent {

    enabled = true;

    onClick() {
        this.enabled = !this.enabled;
    }
}
