import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';

@Injectable({
    providedIn: 'root',
})
export class MenuService {
    public getItems(): Item[] {
        return [
            { title: 'Home', destination: '#home' },
            { title: 'Quem somos', destination: '#quemsomos' },
            { title: 'Serviços', destination: '#servicos' },
            { title: 'Contato', destination: '#contato' },
            {
                icon: 'fa-brands fa-linkedin-in',
                destination: 'https://linkedin.com/company/simplecodesp/',
                external: true,
            },
            {
                icon: 'fa-brands fa-instagram',
                destination: 'https://www.instagram.com/simplecodebr/',
                external: true,
            },
        ];
    }
}
