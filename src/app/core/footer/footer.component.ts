import { Component } from '@angular/core';
import { ChatBotComponent } from '../../components/chat-bot/chat-bot.component';
import { FormsModule } from '@angular/forms'
@Component({
  selector: 'app-footer',
  imports: [ChatBotComponent, FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
