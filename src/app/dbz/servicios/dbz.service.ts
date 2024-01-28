import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid} from 'uuid'
console.log(uuid());

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters :Character[] = [{
    id:uuid(),
    name: 'Krillin',
    power: 1000
  },
  {
    id:uuid(),
    name: 'Goku',
    power: 9500
  },
  {
    id:uuid(),
    name: 'Vegeta',
    power: 7500
  }]

  // onNewCharacter(character:Character):void{
  //   // console.log("Main Page")
  //   // console.log(character)
  //   const newCharacter = {
  //     id:uuid(),
  //     name:character.name,
  //     power:character.power
  //   }
  //   this.characters.push(newCharacter);

  // }
  addCharacter(character:Character):void{
    // console.log("Main Page")
    // console.log(character)
    const newCharacter = {id:uuid(),...character}
    this.characters.push(newCharacter);

  }

  // onDeleteCharacter(index:number){
  //   this.characters.splice(index,1);
  // }
  // constructor() { }

  deleteCharacterById(Id:string){
    this.characters = this.characters.filter(character =>  character.id !== Id)
  }
}
