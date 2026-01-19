import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'secure-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment-card.component.html',
  styleUrl: './payment-card.component.css'
})
export class PaymentCardComponent {
  @Output() tokenCreated = new EventEmitter<string>();
  @Output() validationError = new EventEmitter<string>();

  private cardNumber = '';
  private expiry = '';
  private cvc = '';
  private postal = '';

  errorMessage = '';
  formValid = false;

  cardNumberError = false;
  expiryError = false;
  cvcError = false;
  postalError = false;

  onCardNumber(e: any) {
    this.cardNumber = e.target.value.replace(/\D/g, '');
    this.cardNumberError = this.cardNumber.length < 16;
    this.validate();
  }

  onExpiry(e: any) {
    this.expiry = e.target.value;
    this.expiryError = !/^(0[1-9]|1[0-2])\/\d{2}$/.test(this.expiry);
    this.validate();
  }

  onCvc(e: any) {
    this.cvc = e.target.value;
    this.cvcError = this.cvc.length < 3;
    this.validate();
  }

  onPostal(e: any) {
    this.postal = e.target.value;
    this.postalError = this.postal.length < 4;
    this.validate();
  }

  validate() {
    this.formValid =
      !this.cardNumberError &&
      !this.expiryError &&
      !this.cvcError &&
      !this.postalError;
  }

  tokenize() {
    if (!this.formValid) {
      this.errorMessage = 'Invalid payment details';
      this.validationError.emit(this.errorMessage);
      return;
    }
  
      this.errorMessage ="";    

    // 🔐 Simulated tokenization
    const token = crypto.randomUUID();

    // Clear sensitive data immediately
    this.cardNumber = '';
    this.cvc = '';

    this.tokenCreated.emit(token);
  }
}
