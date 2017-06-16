package com.sadp.equity.trading.application.controlller.equities;

import com.sadp.equity.trading.application.data.*;
import com.sadp.equity.trading.application.service.equities.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.ws.rs.core.Response;

/**
 * Created by adanew on 6/14/2017.
 */
@RestController
public class OrderController {
    @Autowired
    private OrderService orderService;

    @RequestMapping(value = "/orders", method = RequestMethod.POST, produces = {MediaType.APPLICATION_JSON_VALUE}, consumes = {MediaType.APPLICATION_JSON_VALUE})
    @CrossOrigin
    @ResponseBody
    Response saveOrders(@RequestBody OrderBean orderBean) {
        orderService.saveOrder(convertToOrder(orderBean));
        return Response.ok().build();
    }

    private Orders convertToOrder(OrderBean orderBean) {
        return new Orders(orderBean.getEquityId(), orderBean.getPrice(), Side.typeOf(orderBean.getSide()),
                OrderType.typeOf(orderBean.getOrderType()), orderBean.getTraderUserName(), AccountType.typeOf(orderBean.getAccountType()),
                Portfolio.typeOf(orderBean.getPortfolio()), orderBean.getQuantity(), orderBean.getComments());
    }
}
