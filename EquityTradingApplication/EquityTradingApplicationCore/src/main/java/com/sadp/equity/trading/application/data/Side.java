package com.sadp.equity.trading.application.data;

/**
 * Created by adanew on 6/14/2017.
 */
public enum Side {
    BUY("Buy"),
    SELL("Sell");

    private final String description;

    Side(String description) {
        this.description = description;
    }

    public static Side typeOf(String description) {
        for (Side side : values()) {
            if (side.getDescription().equals(description)) {
                return side;
            }
        }
        throw new IllegalArgumentException("Invalid description");
    }

    public String getDescription() {
        return description;
    }
}
