import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../environments/environment";
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatBotService {

  constructor(private http: HttpClient) { }

  sendMessage(message: { message: string }): Observable<string> {
    return this.http.post(environment.apiEndPoint + '/ai/query-guest-bot/', message, {
      responseType: 'text',
      observe: 'response'
    }).pipe(
      map(response => response.body || '')
    );
  }
}
