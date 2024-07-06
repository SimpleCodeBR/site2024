import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { MenuComponent } from './components/menu/menu.component';
import { QuemSomosComponent } from './components/quem-somos/quem-somos.component';
import { ServicosComponent } from './components/servicos/servicos.component';
import { ContatoComponent } from './components/contato/contato.component';
import { FooterComponent } from './components/footer/footer.component';
import { VideoService } from './services/video.service';
import { delay, Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        RouterOutlet,
        CommonModule,
        HeroComponent,
        MenuComponent,
        QuemSomosComponent,
        ServicosComponent,
        ContatoComponent,
        FooterComponent,
    ],
})
export class AppComponent implements OnInit, OnDestroy {
    title = 'SimpleCode';
    loading = true;
    stop$ = new Subject<void>();

    videoService = inject(VideoService);

    ngOnInit(): void {
        this.videoService.video$
            .pipe(takeUntil(this.stop$))
            .subscribe((loaded) => {
                if (loaded) {
                    this.loading = false;
                }
            });
    }

    ngOnDestroy(): void {
        this.stop$.next();
        this.stop$.complete();
    }
}
