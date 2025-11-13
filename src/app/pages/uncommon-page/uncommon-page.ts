import { Component, signal } from '@angular/core';
import { Card } from "../../components/card/card";
import { AsyncPipe,
  I18nPluralPipe,
  I18nSelectPipe,
  JsonPipe,
  KeyValuePipe,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe
} from '@angular/common';
import { interval, map, tap } from 'rxjs';

const client1 = {
  name: 'Juan',
  gender: 'male',
  age: '18',
  address: 'Cayalá, Guatemala'
}

const client2 = {
  name: 'Paola',
  gender: 'female',
  age: '18',
  address: 'Cayalá, Guatemala'
}

@Component({
  selector: 'app-uncommon-page',
  imports: [Card,
    I18nSelectPipe,
    I18nPluralPipe,
    SlicePipe,
    JsonPipe,
    UpperCasePipe,
    KeyValuePipe,
    TitleCasePipe,
    AsyncPipe],
  templateUrl: './uncommon-page.html',
})
export default class UncommonPage {

  //i18n Select
  client = signal(client1)

  invitacionMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient() {
    if (this.client() == client1) {
        this.client.set(client2)
        return
    }

    this.client.set(client1)
  }

  //i18n Plural
  clientsMap = signal({
    '=0': 'No tenemos ningún cliente esperando.',
    '=1': 'un cliente esperando.',
    other: '# clientes esperando.'
  })

  clients = signal([
    'Maria',
    'Ericka',
    'Sebastian',
    'Juan',
    'Carlos',
    'Paola',
    'Melissa',
    'Pablo',
    'Elias',
    'Adder',
    'Daniela'
  ])

  deleteClient() {
    this.clients.update( prev => prev.slice(1))
  }

  //Key value Pipes
  profile = {
    name: 'Juan',
    age: '18',
    address: 'Guatemala, Guatemala'
  }

  //Async Pipe
  promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa')
      console.log('Promesa Finalizada')
    }, 3500)
  })

  myObservableTimer = interval(2000).pipe(
    map((value) => value + 1 ) ,
    tap((value) => console.log('tap:', value))
  )
 }
