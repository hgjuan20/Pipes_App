import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/hero.data';
import { CanFlyPipe } from '../../pipes/can-Fly.pipe';
import { HeroColorPipe } from '../../pipes/heroColor.pipe';
import { HeroTextColorPipe } from '../../pipes/hero-text-color.pipe';
import { TitleCasePipe } from '@angular/common';
import { HeroCreatorPipe } from '../../pipes/hero-creator.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [ToggleCasePipe, CanFlyPipe, HeroColorPipe, HeroTextColorPipe, TitleCasePipe, HeroCreatorPipe],
  templateUrl: './custom-page.html',
})
export default class CustomPage {

   name = signal('Juan HDZ')

   upperCase = signal(true)

   heroes = signal(heroes)

 }
