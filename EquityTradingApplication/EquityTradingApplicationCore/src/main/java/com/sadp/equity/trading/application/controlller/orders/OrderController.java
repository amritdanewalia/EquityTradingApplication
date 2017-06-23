package com.sadp.equity.trading.application.controlller.orders;

import com.sadp.equity.trading.application.data.*;
import com.sadp.equity.trading.application.service.equities.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import web.services.data.EquityType;

import javax.ws.rs.core.Response;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

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

    @RequestMapping(value = "/orders", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    @CrossOrigin
    Response getOrders() {
        return Response.ok(convertToOrderBeans(orderService.getAllOrders())).build();
    }

    private List<OrderBean> convertToOrderBeans(List<Orders> allOrders) {
        return new ArrayList<>(allOrders.parallelStream().map((order) -> getOrderBean(order)).collect(Collectors.toList()));
    }

    private OrderBean getOrderBean(Orders order) {
        return new OrderBean(order.getId(), order.getEquityId(), order.getEquityType().getDescription(), order.getPrice(), order.getSide().getDescription(), order.getOrderType().getDescription(), order.getTraderUserName(), order.getAccountType().getDescription(), order.getPortfolio().getDescription(), order.getQuantity(), order.getComments());
    }

    private Orders convertToOrder(OrderBean orderBean) {
        return new Orders(orderBean.getEquityId(), EquityType.typeOf(orderBean.getSymbol()), orderBean.getPrice(), Side.typeOf(orderBean.getSide()),
                OrderType.typeOf(orderBean.getOrderType()), orderBean.getTraderUserName(), AccountType.typeOf(orderBean.getAccountType()),
                Portfolio.typeOf(orderBean.getPortfolio()), orderBean.getQuantity(), orderBean.getComments());
    }
}
