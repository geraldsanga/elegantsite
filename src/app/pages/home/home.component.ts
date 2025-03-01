import { Component } from '@angular/core';
import { HeroComponent } from '../../shared/hero/hero.component';
import { FooterComponent} from '../../core/footer/footer.component'
import { HeaderComponent } from '../../core/header/header.component'
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, FooterComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  services = []
}
