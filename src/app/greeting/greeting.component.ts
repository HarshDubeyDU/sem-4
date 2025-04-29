import {Component, SimpleChanges} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {environment} from '../../environments/environment';
import {Quote} from '../interface/quote';
import {NgIf} from '@angular/common';

@Component({
  selector: 'greeting',
    imports: [
        FormsModule,
        NgIf
    ],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.css'
})
export class GreetingComponent {
    protected userName = "";
    protected quote?: Quote;

    constructor(private http: HttpClient) {
    }

    ngOnChanges(changes: SimpleChanges) {
        for (const change in changes) {
            let customQuote = changes["quote"];
            this.quote = undefined;
        }
    }

    fetchQuoteAndDisplayCustomGreeting() {
        this.http
            .get<Quote[]>("https://api.api-ninjas.com/v1/quotes", {
                headers: { "X-Api-Key": environment.apiKey }
            })
            .subscribe(response => this.quote = response[0]);
    }
}
