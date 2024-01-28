import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //ANTES
  //title = 'bases';

  //Esto mejora la legibilidad al escribir mi codigo ---->DESPUES
   public title:string = 'Hola Mundo';
  // public counter:number = 10;

  // increaseBy(value:number):void{
  //   this.counter += value;
  // }

  // decreaseBy(value:number):void{
  //   this.counter -= value;
  // }

  // reset(){
  //   this.counter=10;
  // }


}

