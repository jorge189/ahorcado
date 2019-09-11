import { Component } from '@angular/core';
import { ValueTransformer } from '@angular/compiler/src/util';
// import { setFlagsFromString } from 'v8';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 
})
export class AppComponent {
   
  
  
  // guarda = prompt("¿Escriba la palabra a ocultar?");
 
  
 // guardar = this.guarda.toLocaleUpperCase();
 //guarda = null;
   pal = ' ' ;
 palabra= ' '
  palabraOculta = ' ';
  intentos = 0;
  letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
  'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
  'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
   gano = false;
   perdio = false;
   input = false;
  constructor(){
  }
   
 
  
  guardada(  ){
    //  this.val = parseFloat((<HTMLInputElement>document.getElementById("guardar")).value);
       this.pal  = (<HTMLInputElement>document.getElementById("guardar")).value; 
      // this.guarda = document.getElementById("guardar");
   //console.log(this.guarda);
   this.palabra = this.pal.toLocaleUpperCase();
   //console.log(this.guarda);
   //console.log(this.guarda);
     //guardado = this.guarda ;
     this.palabraOculta = '- '.repeat(this.palabra.length);
     if(this.palabra != ' '){
       this.input = true;
     }
     console.log(this.palabraOculta);
     console.log(this.palabra);
     }
    
  
  comprobar( letra ){
    this.existeLetra(letra);
    
    const palabraOcultaArr = this.palabraOculta.split(' ');
    console.log(palabraOcultaArr);
    for( let i = 0; i < this.palabra.length; i++){

      if(this.palabra[i] === letra){
        palabraOcultaArr[i] = letra;
      }
    }

      this.palabraOculta = palabraOcultaArr.join(' '); 
      this.verificaGane();
}
verificaGane(){
    const palabraArr = this.palabraOculta.split(' ');
    const palabraEvaluar = palabraArr.join('');
    if(palabraEvaluar === this.palabra){
      this.gano = true;
      console.log('Usuario GANO');
    }
    if(this.intentos >= 9){
      this.perdio = true;
      console.log('Usuario PERDIO');
    }
  }
  existeLetra(letra){
     if(this.palabra.indexOf(letra)>=0){
      console.log('Letra existe'+letra);
      }else{
    console.log('Letra No existe' + letra);
        this.intentos ++;
      }
  }
}
