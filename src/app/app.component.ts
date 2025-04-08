import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {ToggleMessageComponent} from './toggle-message/toggle-message.component';
import {AngularFeaturesComponent} from './angular-features/angular-features.component';

@Component({
  selector: 'app-root',
    imports: [RouterOutlet, WelcomeComponent, ToggleMessageComponent, AngularFeaturesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practical';
}
