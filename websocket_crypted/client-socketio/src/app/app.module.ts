import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';  //libreria importata
import { SocketService } from './socket.service';
import { CesarService } from './cesar.service';

const config: SocketIoConfig = { url: 'https://3000-pink-mite-dlv0sv4b.ws-eu03.gitpod.io', options: {} };  //url del server

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(config), //anche qui
  ],
  providers: [SocketService, CesarService],  //aggiunti i service
  bootstrap: [AppComponent]
})
export class AppModule { }
