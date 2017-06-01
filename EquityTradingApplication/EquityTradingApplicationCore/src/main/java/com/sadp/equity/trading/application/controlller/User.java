package com.sadp.equity.trading.application.controlller;

public class User {

    private String userId;
    private String password;

    public User() {

    }

    public User(String userId, String password) {
        this.userId = userId;
        this.password = password;
    }

    public String getUserId() {
        return userId;
    }

    public String getPassword() {
        return password;
    }


}
