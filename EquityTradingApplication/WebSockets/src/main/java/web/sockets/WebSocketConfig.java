package web.sockets;/*

*/
/**
 * Created by adanew on 6/6/2017.
 */


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.server.ServerHttpRequest;
import org.springframework.http.server.ServerHttpResponse;
import org.springframework.http.server.ServletServerHttpRequest;
import org.springframework.web.servlet.HandlerMapping;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;
import org.springframework.web.socket.server.HandshakeInterceptor;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

/**
 * Websocket server configuration.
 */
@Configuration
@EnableWebSocket
public class WebSocketConfig implements WebSocketConfigurer {
    @Autowired
    private EquityHandler equityHandler;

    @Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
        registry
                .addHandler(equityHandler, "/equity").
                addInterceptors(new UriTemplateHandshakeInterceptor());
    }


    /**
     * Handshake interceptor that copies URI template variables to attributes
     * of the WebSocket session. Working together with SimpleUrlHandlerMapping
     * of Spring MVC that copy path variables into attributes of the
     * HttpServletRequest.
     */
    private class UriTemplateHandshakeInterceptor
            implements HandshakeInterceptor {

        @Override
        public boolean beforeHandshake(ServerHttpRequest request,
                                       ServerHttpResponse response, WebSocketHandler wsHandler,
                                       Map<String, Object> attributes) throws Exception {

            /* Retrieve original HTTP request */
            HttpServletRequest origRequest =
                    ((ServletServerHttpRequest) request).getServletRequest();

            /* Retrieve template variables */
            Map<String, String> uriTemplateVars =
                    (Map<String, String>) origRequest
                            .getAttribute(
                                    HandlerMapping.URI_TEMPLATE_VARIABLES_ATTRIBUTE);

            /* Put template variables into WebSocket session attributes */
            if (uriTemplateVars != null) {
                attributes.putAll(uriTemplateVars);
            }

            return true;
        }

        @Override
        public void afterHandshake(ServerHttpRequest request,
                                   ServerHttpResponse response, WebSocketHandler wsHandler,
                                   Exception exception) {
        }

    }

}