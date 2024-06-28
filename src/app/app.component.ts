import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { MenuComponent } from './components/menu/menu.component';
import { QuemSomosComponent } from './components/quem-somos/quem-somos.component';
import { ServicosComponent } from './components/servicos/servicos.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        RouterOutlet,
        HeroComponent,
        MenuComponent,
        QuemSomosComponent,
        ServicosComponent,
    ],
})
export class AppComponent {
    title = 'site2024';
}
