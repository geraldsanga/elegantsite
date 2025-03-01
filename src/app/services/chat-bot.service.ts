import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../environments/environment";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatBotService {

  constructor(private http: HttpClient) { }

  public sendMessage(botMessageRequest: any): Observable<any> {
    return this.http.post(environment.apiEndPoint + '/ai/query-database/', botMessageRequest);
  }
}
