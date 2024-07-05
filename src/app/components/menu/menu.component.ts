import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../services/scroll.service';
import { Subject, takeUntil } from 'rxjs';
import { gsap } from 'gsap';
import { MenuService } from '../../services/menu.service';
import { Item } from '../../models/item.model';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit, OnDestroy {
    scrollService = inject(ScrollService);
    menuService = inject(MenuService);
    stop$ = new Subject<void>();

    itemsMenu = this.menuService.getItems().filter((item) => !item.external);
    socialMenu = this.menuService.getItems().filter((item) => item.external);

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

    toggleMenu(): void {
        const menu = document.querySelector('.menu ul');
        const open = document.querySelector('.fa-bars');
        const close = document.querySelector('.fa-xmark');
        if (menu && open && close) {
            menu.classList.toggle('hide');
            open.classList.toggle('hide');
            close.classList.toggle('hide');
        }
    }

    onClick(event: MouseEvent, item: Item): void {
        if (item.external) {
            window.open(item.destination, '_blank');
        } else {
            event.preventDefault();
            const element = document.querySelector(item.destination);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
}
