import { Character } from './../interfaces/character.interface';
import { Component, OnInit } from '@angular/core';
// import { Character } from '../interfaces/character.interface';
import { DbzService } from '../servicios/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent
{
  //Las interfaces no son necesarias de importar en el módulo
  //ya que estan no tienen una contraparte de javascript.Solo son en typescript
  // y solo se usan en el desarrollo
  // public characters :Character[] = [{
  //   name: 'Krillin',
  //   power: 1000
  // },
  // {
  //   name: 'Goku',
  //   power: 9500
  // },
  // {
  //   name: 'Vegeta',
  //   power: 7500
  // }]

  // onNewCharacter(character:Character):void{
  //   // console.log("Main Page")
  //   // console.log(character)
  //   this.characters.push(character);

  // }

  // onDeleteCharacter(index:number){
  //   this.characters.splice(index,1);
  // }
    constructor(private dbzService:DbzService){

    }

    get characters():Character[]
    {
        //Creando una copia de cada uno de los characters guardados
        return [...this.dbzService.characters];

    }

    onDeleteCharacter(id:string):void {
      this.dbzService.deleteCharacterById(id);
    }

    onNewCharacter(character:Character):void {
        this.dbzService.addCharacter(character)
    }
}
