package web.sockets;

/**
 * Created by adanew on 6/7/2017.
 */

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;
import web.services.GoogleFinanceApi;
import web.services.data.EquityType;

import java.io.IOException;
import java.util.Arrays;

@Component
public class EquityHandler extends TextWebSocketHandler {
    @Autowired
    private GoogleFinanceApi googleFinanceApi;

    @Override
    public void afterConnectionEstablished(WebSocketSession session)
            throws IOException {
        session.sendMessage(new TextMessage(googleFinanceApi.getEquities(Arrays.asList(EquityType.values()))));
    }

    @Override
    public void handleTextMessage(WebSocketSession session, TextMessage message) {
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) {

    }

}