'use strict';

function WebSocketMock() {
    this.send = function(message) {
        console.log(message);
    }
}

var webSocketServerMock = new WebSocketMock();