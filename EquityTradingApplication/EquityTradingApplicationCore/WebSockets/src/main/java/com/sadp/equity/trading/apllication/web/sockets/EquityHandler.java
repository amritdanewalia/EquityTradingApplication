package com.sadp.equity.trading.apllication.web.sockets;

/**
 * Created by adanew on 6/7/2017.
 */

import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.io.IOException;

@Component
public class EquityHandler extends TextWebSocketHandler {

    @Override
    public void afterConnectionEstablished(WebSocketSession session)
            throws IOException {
        session.sendMessage(new TextMessage("Ping"));
        System.out.println(session.getAttributes());
        System.out.println(session.getId());
    }

    @Override
    public void handleTextMessage(WebSocketSession session, TextMessage message) {
        System.out.println(message.toString());
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) {

    }

}