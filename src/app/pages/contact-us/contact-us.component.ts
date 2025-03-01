import { Component } from '@angular/core';
import { HeroComponent } from '../../shared/hero/hero.component';
import { ContactFormComponent } from '../../core/contact-form/contact-form.component';
import { HeaderComponent } from '../../core/header/header.component';
import { FooterComponent } from '../../core/footer/footer.component';

@Component({
  selector: 'app-contact-us',
  imports: [HeroComponent, ContactFormComponent, HeaderComponent, FooterComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

}
