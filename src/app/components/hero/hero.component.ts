import {
    AfterViewInit,
    Component,
    ElementRef,
    OnDestroy,
    OnInit,
    ViewChild,
    inject,
} from '@angular/core';
import { ScrollService } from '../../services/scroll.service';
import { Subject, takeUntil } from 'rxjs';
import { TextPlugin, gsap } from 'gsap/all';
import { VideoService } from '../../services/video.service';

@Component({
    selector: 'app-hero',
    standalone: true,
    imports: [],
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.css',
})
export class HeroComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('video') videoRef!: ElementRef<HTMLVideoElement>;

    scrollService = inject(ScrollService);
    videoService = inject(VideoService);
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

        gsap.from('.hero-text', {
            duration: 2.4,
            text: '',
            ease: 'none',
            delay: 1,
        });
        gsap.from('.cta', {
            delay: 2,
            duration: 2.4,
            opacity: 0,
            ease: 'power1.out',
        });
    }

    ngAfterViewInit(): void {
        this.videoRef.nativeElement.addEventListener('loadeddata', () => {
            this.videoService.video$.next(true);
        });
    }

    ngOnDestroy(): void {
        this.stop$.next();
        this.stop$.complete();
    }

    onClick(event: MouseEvent): void {
        event.preventDefault();
        const element = document.querySelector('#contato');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
}
