import { Component, signal } from '@angular/core';
import { Card } from "../../components/card/card";
import { I18nPluralPipe, I18nSelectPipe } from '@angular/common';

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
  imports: [Card, I18nSelectPipe, I18nPluralPipe],
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

 }
