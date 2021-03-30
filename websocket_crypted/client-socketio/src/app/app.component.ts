import { Component } from '@angular/core';
import { SocketService } from './socket.service';
import { Observable } from 'rxjs';
import { CesarService } from './cesar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client-socketio';

  messageList:  string[] = [];   //lista per messaggi criptati
  messDecifrati: string[] = [];  //lista per messaggi decifrati
  obsMess : Observable<Object>;


  constructor(private socketService: SocketService, private cesarService: CesarService) {
  }

  sendMessage(message: HTMLInputElement) {
    let encoded = this.cesarService.encode(message.value, 10);
    this.socketService.sendMessage(encoded);
    console.log("sent: " + message.value)
    message.value="";
  }

  ngOnInit() {
    this.obsMess = this.socketService.getMessage();
    this.obsMess.subscribe(this.rcvMessage);
  }

  rcvMessage = (message: string) => {
    this.messageList.push(message);

    let decoded = this.cesarService.decode(message, 10)  //decripto
    this.messDecifrati.push(decoded);                    //aggiungo alla lista il messaggio decifrato

    console.log("messagereceived: " + message)
    console.log("messaggio cifrato: " + message + " e messaggio decifrato: " + decoded)
  }

}
