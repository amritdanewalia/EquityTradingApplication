package com.sadp.equity.trading.application.dao;

import com.sadp.equity.trading.application.data.Orders;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 * Created by adanew on 6/16/2017.
 */
@Repository
public class OrderDaoImpl implements OrderDao {
    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public void saveOrder(Orders orders) {
        entityManager.persist(orders);
    }
}
