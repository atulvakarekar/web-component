import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaymentCardComponent } from './payment-card/payment-card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,PaymentCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'secure-card-wc';
}
