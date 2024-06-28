import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';
import { Subject, takeUntil } from 'rxjs';
import { gsap } from 'gsap';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [],
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit, OnDestroy {
    scrollService = inject(ScrollService);
    stop$ = new Subject<void>();

    ngOnInit(): void {
        this.scrollService.scroll$
            .pipe(takeUntil(this.stop$))
            .subscribe((scrollY) => {
                const nav = document.querySelector('nav');
                if (!nav) return;

                if (scrollY > 0) {
                    nav.classList.add('scrolled');
                } else {
                    nav.classList.remove('scrolled');
                }
            });

        gsap.from('.menu li', {
            duration: 0.8,
            y: -100,
            opacity: 0,
            stagger: 0.1,
        });
    }

    ngOnDestroy(): void {
        this.stop$.next();
        this.stop$.complete();
    }
}
