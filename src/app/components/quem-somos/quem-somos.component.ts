import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
    selector: 'app-quem-somos',
    standalone: true,
    imports: [],
    templateUrl: './quem-somos.component.html',
    styleUrl: './quem-somos.component.css',
})
export class QuemSomosComponent implements OnInit {
    ngOnInit(): void {
        gsap.from('.quem-somos', {
            scrollTrigger: {
                trigger: '.simplecode',
                start: 'top center',
                toggleActions: 'play none none none',
            },
            duration: 1,
            y: 100,
            opacity: 0,
        });
    }
}
