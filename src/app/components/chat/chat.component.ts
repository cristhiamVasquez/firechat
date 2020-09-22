import { ChatService } from './../../services/chat.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: [
  ]
})
export class ChatComponent implements OnInit{

  mensaje: string = "";
  elemento: any;

  constructor(  public _cs: ChatService) {

    this._cs.cargarMensajes()
            .subscribe( () => {

              setTimeout(() => {
                this.elemento.scrollTop = this.elemento.scrollHeight;
              }, 20);
            } );

    // this._cs.cargarMensajes()
    //         .subscribe( (mensajes: any[]) => {
    //           console.log(mensajes);
    //         } );

   }
   ngOnInit(){
     this.elemento = document.getElementById('app-mensajes');
   }



  enviar_mensaje(){
    console.log(this.mensaje);

    if ( this.mensaje.length === 0 ){
      return;
    }

    this._cs.agregarMensaje( this.mensaje )
            .then( () => this.mensaje = '')
            .catch( (e) => console.error( 'Error al enviar el mensaje' , e));

  }

}
