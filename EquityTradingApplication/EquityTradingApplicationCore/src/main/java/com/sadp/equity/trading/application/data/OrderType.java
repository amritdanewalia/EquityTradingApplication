package com.sadp.equity.trading.application.data;

/**
 * Created by adanew on 6/14/2017.
 */
public enum OrderType {
    MARKET_ORDER("Market Order"),
    LIMIT_ORDER("Limit Order"),
    STOP_ORDER("Stop Order"),
    STOP_LIMIT_ORDER("Stop Limit Order");

    private final String description;

    OrderType(String description) {
        this.description = description;
    }

    public static OrderType typeOf(String description) {
        for (OrderType orderType : values()) {
            if (orderType.getDescription().equals(description)) {
                return orderType;
            }
        }
        throw new IllegalArgumentException("Invalid description");
    }

    public String getDescription() {
        return description;
    }
}
