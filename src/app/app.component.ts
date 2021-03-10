import { Component, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

    private setViewportHeightProperty = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    constructor() {
        this.setViewportHeightProperty();

        window.addEventListener('resize', this.setViewportHeightProperty);
    }


    ngOnDestroy(): void {
        window.removeEventListener('resize', this.setViewportHeightProperty);
    }
}
