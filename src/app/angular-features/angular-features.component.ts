import { Component } from '@angular/core';
import {NgForOf, TitleCasePipe} from '@angular/common';

@Component({
  selector: 'angular-features',
    imports: [
        NgForOf,
        TitleCasePipe
    ],
  templateUrl: './angular-features.component.html',
  styleUrl: './angular-features.component.css'
})
export class AngularFeaturesComponent {
    features: string[] = ["a component-based architecture", "two-way data binding", "dependency injection", "and a robust CLI, along with support for TypeScript and cross-platform development"];

}
