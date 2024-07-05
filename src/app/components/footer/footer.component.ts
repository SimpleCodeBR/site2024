import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.css',
})
export class FooterComponent {
    onClick(event: MouseEvent, destination: string): void {
        event.preventDefault();
        const element = document.querySelector(destination);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
}
