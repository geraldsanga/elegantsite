import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product = null;
}
