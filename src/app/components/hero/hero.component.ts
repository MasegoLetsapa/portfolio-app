import { Component, ChangeDetectionStrategy } from '@angular/core';
import { fadeAnimation, slideUpAnimation } from '../../shared/animations';
import { CounterComponent } from '../../shared/counter/counter.component';
import { LucideHouse, LucideUser, LucideSettings, LucideBriefcase } from '@lucide/angular';
import { SiAngularIcon, SiAzureIcon } from '@semantic-icons/lineicons';
import { LineiconsModule, LineiconsComponent } from '@lineiconshq/angular-lineicons';
import {



} from "@lineiconshq/free-icons";
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CounterComponent],
  animations: [slideUpAnimation, fadeAnimation],
  templateUrl: './hero.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {

  readonly siAngularIcon = SiAngularIcon;
  readonly LucideUser = LucideUser;
  readonly LucideSettings = LucideSettings;
  readonly LucideBriefcase = LucideBriefcase;

  protected readonly badges = [
    { icon: SiAngularIcon, title: 'Angular' },
    { icon: SiAngularIcon, title: '.Net Core' },
    { icon: SiAzureIcon, title: 'SQL Server' },
    { icon: SiAzureIcon, title: 'Azure' }
  ]
}
