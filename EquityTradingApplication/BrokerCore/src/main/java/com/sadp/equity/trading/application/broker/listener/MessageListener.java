package com.sadp.equity.trading.application.broker.listener;

import com.sadp.equity.trading.application.broker.BrokerServer;
import org.springframework.amqp.core.Message;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Service;

/**
 * Created by adanew on 7/18/2017.
 */
@Service
public class MessageListener {
    @RabbitListener(queues = BrokerServer.QUEUE_GENERIC_NAME)
    public void receiveMessage(final Message message) {
        System.out.println("Received message as generic: {}" + new String(message.getBody()));
    }
}
