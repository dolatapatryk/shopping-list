import { Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';

@Component({
    selector: 'app-touch-list-layout',
    templateUrl: './touch-list-layout.component.html',
    styleUrls: ['./touch-list-layout.component.scss']
})
export class TouchListLayoutComponent implements OnInit {
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

    constructor() {
    }

    ngOnInit(): void {
    }

    swipeCallback($event: any) {
        console.log(':::event', $event);
    }

    markChange(item: any) {
        console.log(':::item', item);
    }

    markItem(item: any, mark: boolean) {
        item.mark = mark;
        console.log(':::item', item);
    }
}
