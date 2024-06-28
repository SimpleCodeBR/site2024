import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';
import { Subject, takeUntil } from 'rxjs';
import { TextPlugin, gsap } from 'gsap/all';

@Component({
    selector: 'app-hero',
    standalone: true,
    imports: [],
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.css',
})
export class HeroComponent implements OnInit, OnDestroy {
    scrollService = inject(ScrollService);
    stop$ = new Subject<void>();

    ngOnInit(): void {
        gsap.registerPlugin(TextPlugin);

        this.scrollService.scroll$
            .pipe(takeUntil(this.stop$))
            .subscribe((scrollY) => {
                const scroll = document.querySelector('.fa-arrow-down');
                if (!scroll) return;

                if (scrollY > 0) {
                    scroll.classList.add('invisible');
                }
            });

        gsap.from('h1', {
            duration: 2,
            text: '',
            ease: 'none',
        });
        gsap.from('.cta', {
            delay: 2,
            duration: 2,
            opacity: 0,
            ease: 'power1.out',
        });
    }

    ngOnDestroy(): void {
        this.stop$.next();
        this.stop$.complete();
    }
}
