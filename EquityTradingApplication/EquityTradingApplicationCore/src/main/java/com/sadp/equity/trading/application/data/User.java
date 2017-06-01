package com.sadp.equity.trading.application.data;

import javax.persistence.*;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "USER_ID", nullable = false, unique = true)
    private String userId;

    @Column(name = "PASSWORD", nullable = false)
    private String password;


    public User() {

    }

    public User(String userId) {
        this.userId = userId;
    }

    public String getPassword() {
        return password;
    }

    public long getId() {
        return id;
    }

    public String getUserId() {
        return userId;
    }


}