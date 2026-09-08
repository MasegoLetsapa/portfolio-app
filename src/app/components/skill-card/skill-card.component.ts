
import { Component, ChangeDetectionStrategy } from '@angular/core';
/* import { LucideAngularModule, BriefcaseBusiness, Wrench, Database, Server, Monitor } from '@lucide/angular';
import { LucideCircleCheck } from '@lucide/angular';  */
/* import { LucideIcon, LucideBriefcaseBusiness, LucideWrench } from '@lucide/angular'; */
import { LucideDynamicIcon, provideLucideConfig, LucideBriefcaseBusiness, LucideWrench, LucideDatabase, LucideServer, LucideMonitor } from '@lucide/angular';


@Component({
  selector: 'app-skill-card',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './skill-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './skill-card.component.scss',
  providers: [
    provideLucideConfig({ size: 20, color: '#ffffff' }),
  ]

})
export class SkillCardComponent {

  readonly skills = [
    { icon: LucideMonitor, title: 'Frontend', text: ['Angular', 'Typescript', 'HTML5', 'CSS3/Tailwind Css', 'RxJS'] },
    { icon: LucideWrench, title: 'Backend', text: ['ASP.NET Core 8', 'C#', 'REST APIs', 'JWT Authentication', 'Clean Architecture'] },
    { icon: LucideDatabase, title: 'Database', text: ['SQL Server', 'MySQL', 'Entity Framework', 'MongoDB', 'Oracle'] },
    { icon: LucideServer, title: 'Tools & DevOps', text: ['Git', 'GitHub', 'Visual Studio', 'VS Code', 'Swagger/Postman'] },
    { icon: LucideBriefcaseBusiness, title: 'Business', text: ['Requirements Gathering & Analysis', 'Process Mapping', 'UML', 'Agile/Scrum'] }
  ]

}
