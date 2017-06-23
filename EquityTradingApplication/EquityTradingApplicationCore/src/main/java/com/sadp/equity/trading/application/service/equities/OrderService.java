package com.sadp.equity.trading.application.service.equities;

import com.sadp.equity.trading.application.data.Orders;

import java.util.List;

/**
 * Created by adanew on 6/14/2017.
 */
public interface OrderService {
    void saveOrder(Orders orders);

    List<Orders> getAllOrders();
}
