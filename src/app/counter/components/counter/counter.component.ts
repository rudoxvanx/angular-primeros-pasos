import { Component } from "@angular/core";

@Component({
  selector:'app-counter',
  template:`
  <p>
      Counter: {{ counter }}
  </p>

  <button (click)="increaseBy(2)">+1</button>
  <button (click)="reset()">Reset</button>
  <button (click)="decreaseBy(2)">-1</button>`,
})
export class CounterComponent {
  public counter:number = 10;

  increaseBy(value:number):void{
    this.counter += value;
  }

  decreaseBy(value:number):void{
    this.counter -= value;
  }

  reset(){
    this.counter=10;
  }
}
