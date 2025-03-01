import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-bot',
  imports: [NgIf, NgFor, FormsModule],
  templateUrl: './chat-bot.component.html',
  styleUrl: './chat-bot.component.css'
})
export class ChatBotComponent {
  isChatOpen = false;
  unreadMessages = 0;
  newMessage = '';
  messages: { text: string; isBot: boolean }[] = [
    { text: 'Hello! How can I help you today?', isBot: true }
  ];

  toggleChat() {
    this.isChatOpen = !this.isChatOpen;
    if (this.isChatOpen) this.unreadMessages = 0;
  }

  sendMessage() {
    if (!this.newMessage.trim()) return;

    // Add user message
    this.messages.push({ text: this.newMessage, isBot: false });
    
    // Simulate bot response
    setTimeout(() => {
      this.messages.push({ 
        text: 'Thank you for your message. Our team will respond shortly.', 
        isBot: true 
      });
      if (!this.isChatOpen) this.unreadMessages++;
    }, 1000);

    this.newMessage = '';
  }
}
