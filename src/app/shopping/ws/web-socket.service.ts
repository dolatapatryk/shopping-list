import * as SockJS from 'sockjs-client';
import { CompatClient, Stomp } from '@stomp/stompjs';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { CacheableService } from 'angular-cacheable';
import { ShoppingListsService } from '../../services/shopping-lists.service';

export class WebSocketService {
    private webSocketEndpoint = 'http://localhost:8090/ws';
    private getProductsTopic = '/topic/shopping-list-products';
    private refreshListsTopic = '/topic/refresh-lists';
    private stompClient: CompatClient;
    private listId: number;

    constructor(private component: ShoppingListComponent) {
    }

    connect(listId: number) {
        console.log('Initialize ws connection');
        this.listId = listId;
        const ws = new SockJS(this.webSocketEndpoint);
        this.stompClient = Stomp.over(ws);
        this.stompClient.connect({}, frame => {
            this.stompClient.subscribe(this.getProductsTopic, event => {
                this.onMessageReceived(event);
            });
            this.stompClient.subscribe(this.refreshListsTopic, event => {
                this.invalidateListsCache(event);
            });
            this.productsRequest();
        });
    }

    disconnect() {
        if (this.stompClient) {
            this.stompClient.disconnect();
        }
        console.log('Disconnected ws');
    }

    productsRequest() {
        this.stompClient.send('/app/get-shopping-list-products', {}, JSON.stringify(this.listId));
    }

    markProduct(productId: number, marked: boolean) {
        const data = { listId: this.listId, productId, marked };
        this.stompClient.send('/app/mark-product', {}, JSON.stringify(data));
    }

    closeList() {
        this.stompClient.send('/app/close-list', {}, JSON.stringify(this.listId));
    }

    onMessageReceived(event: any) {
        console.log('message received');
        this.component.updateProducts(JSON.parse(event.body));
    }

    private errorCallback(error: any) {
        console.log('ErrorCallback ->', error);
        setTimeout(() => this.connect(this.listId), 5000);
    }

    private invalidateListsCache(event: any) {
        console.log('::invalidate list cache', event);
        if (event) {
            CacheableService.getInstance().invalidate(ShoppingListsService.CACHE_KEY);
            this.component.routeToMainScreen();
        }
    }
}
