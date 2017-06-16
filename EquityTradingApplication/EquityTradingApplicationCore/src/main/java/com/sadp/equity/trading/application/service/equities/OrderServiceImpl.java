package com.sadp.equity.trading.application.service.equities;

import com.sadp.equity.trading.application.dao.OrderDao;
import com.sadp.equity.trading.application.data.Orders;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Created by adanew on 6/14/2017.
 */
@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderDao orderDao;

    @Override
    @Transactional
    public void saveOrder(Orders orders) {
        orderDao.saveOrder(orders);
    }
}
