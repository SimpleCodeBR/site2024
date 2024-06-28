import { Component, OnInit } from '@angular/core';
import { ScrollTrigger, gsap } from 'gsap/all';

@Component({
    selector: 'app-quem-somos',
    standalone: true,
    imports: [],
    templateUrl: './quem-somos.component.html',
    styleUrl: './quem-somos.component.css',
})
export class QuemSomosComponent implements OnInit {
    ngOnInit(): void {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from('h2', {
            scrollTrigger: {
                trigger: 'section',
                start: 'top center',
                toggleActions: 'play none none none',
            },
            duration: 1,
            y: 100,
            opacity: 0,
        });
    }
}
