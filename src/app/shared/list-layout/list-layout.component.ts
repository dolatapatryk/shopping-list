import { Component, ContentChild, EventEmitter, Input, Output, TemplateRef } from '@angular/core';

@Component({
    selector: 'app-list-layout',
    templateUrl: './list-layout.component.html',
    styleUrls: ['./list-layout.component.scss']
})
export class ListLayoutComponent {
    @Input()
    items: any[];

    @ContentChild(TemplateRef)
    listItemTemplate: TemplateRef<any>;

    @Output()
    addButtonClicked: EventEmitter<any> = new EventEmitter<any>();
}
