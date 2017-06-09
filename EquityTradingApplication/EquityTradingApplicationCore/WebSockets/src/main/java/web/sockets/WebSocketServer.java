package web.sockets;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

/**
 * Created by adanew on 6/8/2017.
 */
@SpringBootApplication
@ComponentScan({"web.services", "web.sockets"})
public class WebSocketServer {
    public static void main(String[] args) {
        SpringApplication.run(WebSocketServer.class, args);
    }
}
