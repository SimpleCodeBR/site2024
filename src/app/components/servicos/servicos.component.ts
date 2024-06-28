import { Component, OnInit } from '@angular/core';
import { ScrollTrigger, gsap } from 'gsap/all';

@Component({
    selector: 'app-servicos',
    standalone: true,
    imports: [],
    templateUrl: './servicos.component.html',
    styleUrl: './servicos.component.css',
})
export class ServicosComponent implements OnInit {
    ngOnInit(): void {
        gsap.registerPlugin(ScrollTrigger);

        gsap.utils.toArray('.stats h1').forEach((stat) => {
            const el = stat as HTMLElement;
            const endValue = parseInt(el.innerText.replace('%', ''), 10);

            gsap.fromTo(
                el,
                { innerText: 0 },
                {
                    innerText: endValue,
                    duration: 1.4,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: '.servicos',
                        toggleActions: 'play none none none',
                    },
                    onUpdate: function (this: any) {
                        el.innerText =
                            Math.floor(this.targets()[0].innerText) + '%';
                    },
                },
            );
        });
    }
}
