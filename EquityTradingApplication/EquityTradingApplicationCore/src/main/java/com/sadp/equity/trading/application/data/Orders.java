package com.sadp.equity.trading.application.data;

import web.services.data.EquityType;

import javax.persistence.*;
import java.math.BigDecimal;

/**
 * Created by adanew on 6/16/2017.
 */
@Entity
public class Orders {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "EQUITY_ID", nullable = false, unique = false)
    private long equityId;

    @Enumerated(EnumType.STRING)
    @Column(name = "EQUITY_TYPE", nullable = false, unique = false)
    private EquityType equityType;

    @Column(name = "PRICE", nullable = false, unique = false)
    private BigDecimal price;

    @Enumerated(EnumType.STRING)
    @Column(name = "SIDE", nullable = false, unique = false)
    private Side side;

    @Enumerated(EnumType.STRING)
    @Column(name = "ORDER_TYPE", nullable = false, unique = false)
    private OrderType orderType;

    @Column(name = "TRADER_USER_NAME", nullable = false, unique = false)
    private String traderUserName;

    @Enumerated(EnumType.STRING)
    @Column(name = "ACCOUNT_TYPE", nullable = false, unique = false)
    private AccountType accountType;

    @Enumerated(EnumType.STRING)
    @Column(name = "PORTFOLIO", nullable = false, unique = false)
    private Portfolio portfolio;

    @Column(name = "QUANTITY", nullable = false, unique = false)
    private long quantity;

    @Column(name = "COMMENTS", nullable = false, unique = false, length = 500)
    private String comments;

    public Orders() {
    }

    public Orders(long equityId, EquityType equityType, BigDecimal price, Side side, OrderType orderType, String traderUserName, AccountType accountType, Portfolio portfolio, long quantity, String comments) {
        this.equityId = equityId;
        this.equityType = equityType;
        this.price = price;
        this.side = side;
        this.orderType = orderType;
        this.traderUserName = traderUserName;
        this.accountType = accountType;
        this.portfolio = portfolio;
        this.quantity = quantity;
        this.comments = comments;
    }

    public long getId() {
        return id;
    }

    public long getEquityId() {
        return equityId;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public Side getSide() {
        return side;
    }

    public OrderType getOrderType() {
        return orderType;
    }

    public String getTraderUserName() {
        return traderUserName;
    }

    public AccountType getAccountType() {
        return accountType;
    }

    public Portfolio getPortfolio() {
        return portfolio;
    }

    public long getQuantity() {
        return quantity;
    }

    public String getComments() {
        return comments;
    }

    public EquityType getEquityType() {
        return equityType;
    }
}
