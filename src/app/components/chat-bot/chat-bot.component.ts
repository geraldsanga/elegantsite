import { AsyncPipe, DatePipe, NgClass, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {BehaviorSubject} from "rxjs";
import {ChangeDetectorRef, Component, ElementRef, inject, ViewChild} from '@angular/core';
import { ChatBotService } from 'src/app/services/chat-bot.service';
@Component({
  selector: 'app-chat-bot',
  imports: [NgIf, NgFor, FormsModule, AsyncPipe, NgClass, DatePipe],
  templateUrl: './chat-bot.component.html',
  styleUrl: './chat-bot.component.css'
})
export class ChatBotComponent {
  @ViewChild('chatMessages') private chatMessages!: ElementRef;

  isChatOpen = false;
  unreadMessages = 0;
  newMessage = '';
  messages$ = new BehaviorSubject<any[]>([]);
  loading$ = new BehaviorSubject<boolean>(false);

  constructor(
    private chatBotService: ChatBotService,
    private cdr: ChangeDetectorRef
  ) {}

  toggleChat() {
    this.isChatOpen = !this.isChatOpen;
    if (this.isChatOpen) {
      this.unreadMessages = 0;
      this.scrollToBottom();
    }
  }

  sendMessage() {
    if (!this.newMessage.trim()) return;

    // Add user message
    const userMessage: any = {
      content: this.newMessage,
      isUser: true,
      timestamp: new Date()
    };
    this.messages$.next([...this.messages$.value, userMessage]);
    this.scrollToBottom();

    this.loading$.next(true);
    this.newMessage = '';

    this.chatBotService.sendMessage({ message: this.newMessage }).subscribe({
      next: (response: string) => {
        const botMessage: any = {
          content: this.formatMessage(response),
          isUser: false,
          timestamp: new Date()
        };
        this.messages$.next([...this.messages$.value, botMessage]);
        this.scrollToBottom();
        this.loading$.next(false);
      },
      error: (error) => {
        const errorMessage: any = {
          content: this.formatMessage("There appears to be a problem with your connection. Please try again later."),
          isUser: false,
          timestamp: new Date()
        };
        this.messages$.next([...this.messages$.value, errorMessage]);
        this.scrollToBottom();
        this.loading$.next(false);
      }
    });
  }

  private formatMessage(content: string): string {
    return content
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`(.*?)`/g, '<code>$1</code>')
      .replace(/\n/g, '<br>');
  }

  private scrollToBottom(): void {
    setTimeout(() => {
      try {
        this.chatMessages.nativeElement.scrollTop = this.chatMessages.nativeElement.scrollHeight;
      } catch(err) { }
    }, 100);
  }
}
