package com.sadp.equity.trading.application.controlller;

public class UserBean {

    private String userId;
    private char[] password;

    public UserBean() {

    }

    public UserBean(String userId, char[] password) {
        this.userId = userId;
        this.password = password;
    }

    public String getUserId() {
        return userId;
    }

    public char[] getPassword() {
        return password;
    }


}
