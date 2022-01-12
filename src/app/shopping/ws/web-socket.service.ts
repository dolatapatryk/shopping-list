import * as SockJS from 'sockjs-client';
import { CompatClient, Stomp } from '@stomp/stompjs';

export class WebSocketService {
    private webSocketEndpoint = 'http://localhost:8090/ws';
    private topic = '/topic/greetings';
    private stompClient: CompatClient;

    connect() {
        console.log('Initialize ws connection');
        const ws = new SockJS(this.webSocketEndpoint);
        this.stompClient = Stomp.over(ws);
        this.stompClient.connect({ }, frame => {
            this.stompClient.subscribe(this.topic, event => {
                this.onMessageReceived(event);
            });
            this.send('ciekawe');
        });
    }

    disconnect() {
        if (this.stompClient) {
            this.stompClient.disconnect();
        }
        console.log('Disconnected ws');
    }

    send(message: any) {
        this.stompClient.send('/app/hello', {}, JSON.stringify(message));
    }

    onMessageReceived(event: any) {
        console.log('message received');
        console.log(event.body);
    }

    private errorCallback(error: any) {
        console.log('ErrorCallback ->', error);
        setTimeout(() => this.connect(), 5000);
    }
}
