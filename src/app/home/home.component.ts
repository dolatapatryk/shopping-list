import { Component } from '@angular/core';

interface SidenavItem {
    name: string;
    icon: string;
    route: string;
}

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    sidenavItems: SidenavItem[] = [
        { icon: 'menu', route: '', name: 'Listy zakupów' },
        { icon: 'menu', route: '/products', name: 'Produkty' },
        { icon: 'menu', route: '/departments', name: 'Działy' },
    ];

    constructor() {
    }
}
