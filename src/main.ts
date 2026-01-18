import { bootstrapApplication, createApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { createCustomElement } from '@angular/elements';
import { PaymentCardComponent } from './app/payment-card/payment-card.component';


createApplication().then(appRef => {
  const element = createCustomElement(PaymentCardComponent, {
    injector: appRef.injector
  });

  customElements.define('secure-card-element', element);
});