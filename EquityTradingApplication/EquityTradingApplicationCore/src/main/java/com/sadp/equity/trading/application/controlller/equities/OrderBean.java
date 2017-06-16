package com.sadp.equity.trading.application.controlller.equities;

import java.math.BigDecimal;

/**
 * Created by adanew on 6/14/2017.
 */
public class OrderBean {
    private long equityId;
    private BigDecimal price;
    private String side;
    private String orderType;
    private String traderUserName;
    private String accountType;
    private String portfolio;
    private long quantity;
    private String comments;


    public OrderBean() {
    }

    public OrderBean(long equityId, BigDecimal price, String side, String orderType, String traderUserName, String accountType, String portfolio, long quantity, String comments) {
        this.equityId = equityId;
        this.price = price;
        this.side = side;
        this.orderType = orderType;
        this.traderUserName = traderUserName;
        this.accountType = accountType;
        this.portfolio = portfolio;
        this.quantity = quantity;
        this.comments = comments;
    }

    public long getEquityId() {
        return equityId;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public String getSide() {
        return side;
    }

    public String getOrderType() {
        return orderType;
    }

    public String getTraderUserName() {
        return traderUserName;
    }

    public String getAccountType() {
        return accountType;
    }

    public String getPortfolio() {
        return portfolio;
    }

    public long getQuantity() {
        return quantity;
    }

    public String getComments() {
        return comments;
    }
}
