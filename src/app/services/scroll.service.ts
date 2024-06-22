import { Injectable } from '@angular/core';
import { Observable, fromEvent, map, throttleTime } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ScrollService {
    scroll$!: Observable<number>;

    constructor() {
        this.scroll$ = fromEvent(window, 'scroll').pipe(
            throttleTime(100),
            map(() => window.scrollY),
        );
    }
}
