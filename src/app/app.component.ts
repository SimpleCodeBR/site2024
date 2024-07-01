import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { MenuComponent } from './components/menu/menu.component';
import { QuemSomosComponent } from './components/quem-somos/quem-somos.component';
import { ServicosComponent } from './components/servicos/servicos.component';
import { ContatoComponent } from './components/contato/contato.component';
import { FooterComponent } from './components/footer/footer.component';

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
        ContatoComponent,
        FooterComponent,
    ],
})
export class AppComponent {
    title = 'SimpleCode';
}
