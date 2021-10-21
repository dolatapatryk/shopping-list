import { Component, OnDestroy } from '@angular/core';
import { NgSelectConfig } from '@ng-select/ng-select';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

    private setViewportHeightProperty = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    constructor(private ngSelectConfig: NgSelectConfig) {
        this.setViewportHeightProperty();

        window.addEventListener('resize', this.setViewportHeightProperty);

        this.setNgSelectConfiguration();
    }


    ngOnDestroy(): void {
        window.removeEventListener('resize', this.setViewportHeightProperty);
    }

    private setNgSelectConfiguration() {
        this.ngSelectConfig.appendTo = 'body';
        this.ngSelectConfig.notFoundText = 'Nie znaleziono 😞';
    }
}
