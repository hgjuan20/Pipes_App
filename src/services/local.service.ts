import { Injectable, signal } from '@angular/core';

export type AvailableLocal = 'es'|'fr'|'en'

@Injectable({providedIn: 'root'})
export class LocalService {


  private currentLocale = signal<AvailableLocal>(
    (localStorage.getItem('locale') as AvailableLocal) ?? 'es'
  )

  // constructor() {

  //   this.currentLocale.set(
  //     localStorage.getItem('locale') as AvailableLocal ?? 'es'
  //   )

  // }

  get getLocal() {
    return this.currentLocale()
  }

  changeLocale(locale: AvailableLocal){
    localStorage.setItem('locale', locale)
    this.currentLocale.set(locale)
    window.location.reload()
  }

}
