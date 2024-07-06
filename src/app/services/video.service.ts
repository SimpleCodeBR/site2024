import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class VideoService {
    video$ = new Subject<boolean>();
}
