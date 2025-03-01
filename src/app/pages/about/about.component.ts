import { Component } from '@angular/core';
import { HeroComponent } from '../../shared/hero/hero.component';
import { FooterComponent } from '../../core/footer/footer.component';
import { HeaderComponent } from '../../core/header/header.component';

@Component({
  selector: 'app-about',
  imports: [HeroComponent, FooterComponent, HeaderComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  teamMembers = [
    {
      name: 'John Doe',
      role: 'Lead Pharmacist',
      imageUrl: 'assets/team-1.jpeg',
      honours: 'PharmD, 15 years experience'
    },
    {
      name: 'Jane Doe',
      role: 'Assistant Pharmacist',
      imageUrl: 'assets/team-2.jpeg',
      honours: 'PharmD, 10 years experience'
    },
    {
      name: 'Joseph Doe',
      role: 'Pharmacist',
      imageUrl: 'assets/team-3.jpeg',
      honours: 'PharmD, 5 years experience'
    },
  ]
}
