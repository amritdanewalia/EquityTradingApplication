package com.sadp.equity.trading.application.controlller;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Arrays;

public class UserBean {

    private final String userId;
    private final char[] password;

    @JsonCreator
    public UserBean(@JsonProperty("userId") String userId, @JsonProperty("password") char[] password) {
        this.userId = userId;
        this.password = password;
    }

    public String getUserId() {
        return userId;
    }

    public char[] getPassword() {
        return password;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        UserBean userBean = (UserBean) o;

        if (userId != null ? !userId.equals(userBean.userId) : userBean.userId != null) return false;
        return Arrays.equals(password, userBean.password);

    }

    @Override
    public int hashCode() {
        int result = userId != null ? userId.hashCode() : 0;
        result = 31 * result + Arrays.hashCode(password);
        return result;
    }

    @Override
    public String toString() {
        return "UserBean{" +
                "userId='" + userId + '\'' +
                ", password=" + Arrays.toString(password) +
                '}';
    }
}
