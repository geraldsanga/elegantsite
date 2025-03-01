import { Component } from '@angular/core';
import { HeroComponent } from '../../shared/hero/hero.component';
import { ProductCardComponent } from '../../shared/product-card/product-card.component';
import {NgForOf} from '@angular/common';
@Component({
  selector: 'app-products',
  imports: [HeroComponent, ProductCardComponent, NgForOf],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
    products = []
    categories = []
}
