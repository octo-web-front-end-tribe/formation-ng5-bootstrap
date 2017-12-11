import { Component } from '@angular/core';

interface Framework {
  logo: string;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  frameworks: Array<Framework> = [
    {
      logo: 'https://angular.io/assets/images/logos/angular/angular.svg',
      name: 'Angular'
    },
    {
      logo: 'https://docs.microsoft.com/en-us/appcenter/media/logo_react.svg',
      name: 'ReactJS'
    },
    {
      logo: 'https://vuejs.org/images/logo.png',
      name: 'VueJS'
    },
    {
      logo: 'https://emberjs.com/images/tomster-sm.png',
      name: 'EmberJS'
    }
  ]
}
