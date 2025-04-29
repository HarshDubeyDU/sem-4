import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {ToggleMessageComponent} from './toggle-message/toggle-message.component';
import {AngularFeaturesComponent} from './angular-features/angular-features.component';
import {GreetingComponent} from './greeting/greeting.component';
import {CounterComponent} from './counter/counter.component';
import {FormValidationComponent} from './form-validation/form-validation.component';

@Component({
  selector: 'app-root',
    imports: [RouterOutlet, WelcomeComponent, ToggleMessageComponent, AngularFeaturesComponent, GreetingComponent, CounterComponent, FormValidationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practical';
}
