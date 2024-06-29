import { Component, ElementRef, OnInit } from '@angular/core';
import { gsap, ScrollTrigger } from 'gsap/all';

@Component({
    selector: 'app-contato',
    standalone: true,
    imports: [],
    templateUrl: './contato.component.html',
    styleUrl: './contato.component.css',
})
export class ContatoComponent implements OnInit {
    constructor(private el: ElementRef) {}

    ngOnInit() {
        gsap.registerPlugin(ScrollTrigger);

        const lampOff = this.el.nativeElement.querySelector('.lamp-off');
        const lampOn = this.el.nativeElement.querySelector('.lamp-on');

        ScrollTrigger.create({
            trigger: '.contato',
            start: 'top center',
            once: true,
            onEnter: () => {
                gsap.to(lampOff, {
                    opacity: 0,
                    duration: 1,
                    delay: 1.8,
                    onComplete: () => {
                        lampOff.style.display = 'none';
                        lampOn.style.display = 'block';
                        gsap.fromTo(
                            lampOn,
                            { opacity: 0 },
                            { opacity: 1, duration: 1 },
                        );
                    },
                });
            },
        });
    }
}
