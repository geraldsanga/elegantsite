import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  @Input() title: string | undefined;
  @Input() subtitle: string | undefined;
  @Input() imageUrl: string | undefined;
}
