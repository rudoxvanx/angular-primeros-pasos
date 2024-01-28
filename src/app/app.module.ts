import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { CounterComponent } from './counter/counter.component';
import { ListComponent } from './heroes/list/list.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [
    AppComponent,
    // CounterComponent,
    //ListComponent,
    //HeroComponent
  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule,
    DbzModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})

// Un módulo es una simple clase que tiene un decorador
export class AppModule { }


