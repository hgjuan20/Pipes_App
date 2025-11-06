import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { AvailableLocal, LocalService } from '../../../services/local.service';

@Component({
  selector: 'app-basic-page',
  standalone: true,
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.html',
})
export default class BasicPage {

  localService = inject(LocalService)
  currentLocal = signal(inject(LOCALE_ID))

  nameLower = signal('juan')
  nameUpper = signal('JUAN')
  fullName = signal('JuAn hERnÁnDeZ')

  customDate = signal( new Date() )

  tickingDateEffect = effect((onCleanup) => {
    const interval = setInterval(() => {
      this.customDate.set(new Date())
      console.log('tick')
    }, 1000)

    onCleanup(() => {
      clearInterval(interval)
    })
  })

  changeLocal(locale: AvailableLocal) {
    console.log({locale})
    this.localService.changeLocale(locale)
  }
 }
