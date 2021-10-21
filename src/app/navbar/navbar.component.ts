import { Component, EventEmitter, Output } from '@angular/core';

export interface NavbarItem {
    routerLink: string;
    itemName: string;
}

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    items: NavbarItem[] = [
        { routerLink: '/shopping', itemName: 'Zakupy' },
        { routerLink: '/departments', itemName: 'Działy' },
        { routerLink: '/products', itemName: 'Produkty' }
    ];

    @Output()
    toggleSidenav: EventEmitter<any> = new EventEmitter<any>();

    @Output()
    closeSidenav: EventEmitter<any> = new EventEmitter<any>();
}
