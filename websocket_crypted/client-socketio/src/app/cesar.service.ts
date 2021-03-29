import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CesarService {
  decode(encoded:string, offset:number) : string
  {
    var plainText = "";  //stringa che continene il testo decriptato
    for(var i = 0; i < encoded.length; i++) {
      var encryptedChar = encoded.charCodeAt(i);
      if(encryptedChar >= 97 && encryptedChar <= 122) {
        plainText += String.fromCharCode((encryptedChar-97 - offset + 26) %26 + 97 );
      }
      else if(encryptedChar >= 65 && encryptedChar <= 90) {
        plainText += String.fromCharCode((encryptedChar-65 - offset + 26) %26 + 65 );
      }
    }
    return plainText;
  }

  encode(toEncode:string, offset:number) : string
  {
  	//Trasformo la stringa in un array di carateri
    let charArray = Array.from(toEncode);
    let encodedArray = [];

    for (const char of charArray) {
      //Estraggo da ogni carattere il codice ascii
      let charCode = char.charCodeAt(0);
      //Modifico il codice ascii e lo salvo in un carattere
      let newChar = String.fromCharCode(charCode + offset)
      encodedArray.push(newChar);
    }

    //Trasformo l'encoded array in una stringa
    return encodedArray.join('');
  }
}
