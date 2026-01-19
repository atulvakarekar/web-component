import { bootstrapApplication, createApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component1';
import { createCustomElement } from '@angular/elements';
import { PaymentCardComponent } from './app/payment-card/payment-card.component';


bootstrapApplication(PaymentCardComponent).then(appRef => {
  const injector = appRef.injector;

  const element = createCustomElement(PaymentCardComponent, { injector });

  customElements.define('payment-card', element);
});