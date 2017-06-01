package com.sadp.equity.trading.application.service;

import com.sadp.equity.trading.application.dao.UserDao;
import com.sadp.equity.trading.application.data.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UserServiceImpl implements com.sadp.equity.trading.application.service.UserService {
    @Autowired
    private UserDao userDao;

    @Override
    public User getUser(String userId) {
        return userDao.getUser(userId);
    }

}
