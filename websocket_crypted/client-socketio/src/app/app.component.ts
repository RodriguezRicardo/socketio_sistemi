import { Component } from '@angular/core';
import { SocketService } from './socket.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client-socketio';

  messageList:  string[] = [];
  obsMess : Observable<Object>;

  constructor(private socketService: SocketService) {
  }

  sendMessage(message: HTMLInputElement) {
    this.socketService.sendMessage(message.value);

    console.log("sent: " + message.value)
    message.value="";
  }

  ngOnInit() {
    this.obsMess = this.socketService.getMessage();
    this.obsMess.subscribe(this.rcvMessage);
  }

  rcvMessage = (message: string) => {
    this.messageList.push(message);
    console.log("messagereceived: " + message)
  }
}
