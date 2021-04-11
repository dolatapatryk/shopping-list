import { Component, ContentChild, EventEmitter, Input, Output, TemplateRef } from '@angular/core';

@Component({
    selector: 'app-touch-list-layout',
    templateUrl: './touch-list-layout.component.html',
    styleUrls: ['./touch-list-layout.component.scss']
})
export class TouchListLayoutComponent {
    @Input()
    items: any[];

    @Input()
    addButtonVisible = true;

    @ContentChild(TemplateRef)
    listItemTemplate: TemplateRef<any>;

    @Output()
    addButtonClicked: EventEmitter<any> = new EventEmitter<any>();

    @Input()
    enableSwipe = true;

    @Output()
    itemClicked: EventEmitter<any> = new EventEmitter<any>();

    @Output()
    editClicked: EventEmitter<any> = new EventEmitter<any>();

    @Output()
    deleteClicked: EventEmitter<any> = new EventEmitter<any>();

    actionClicked(item: any, action: 'edit' | 'trash') {
        if (action === 'edit') {
            this.editClicked.emit(item);
        } else {
            this.deleteClicked.emit(item);
        }
    }
}
