package com.sadp.equity.trading.application.dao;

import com.sadp.equity.trading.application.data.User;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import java.util.List;


@Repository
public class UserDaoImpl implements UserDao {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public User getUser(String userId) {
        String query = "from User where userId=:userId";
        TypedQuery<User> typedQuery = entityManager.createQuery(query,
                User.class);
        typedQuery.setParameter("userId", userId);

        List<User> resultList = typedQuery.getResultList();
        if (resultList.isEmpty()) {
            return null;
        }
        return resultList.get(0);
    }
}
