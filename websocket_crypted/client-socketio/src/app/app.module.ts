import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';  //libreria importata
import { SocketService } from './socket.service';

const config: SocketIoConfig = { url: 'https://3000-fuchsia-ptarmigan-czdb56lc.ws-eu03.gitpod.io', options: {} };  //url del server

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(config), //anche qui
  ],
  providers: [SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
