import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-numbers-page',
  standalone: true,
  imports: [DecimalPipe, PercentPipe, CurrencyPipe],
  templateUrl: './numbers-page.html',
})
export default class NumbersPage {

  totalSells = signal(2_123_511.5567)
  percent = signal(0.4856)


}
