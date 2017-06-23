package com.sadp.equity.trading.application.dao;

import com.sadp.equity.trading.application.data.Orders;

import java.util.List;

/**
 * Created by adanew on 6/16/2017.
 */
public interface OrderDao {
    void saveOrder(Orders orders);

    List<Orders> getAllOrders();
}
