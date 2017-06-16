package com.sadp.equity.trading.application.data;

/**
 * Created by adanew on 6/14/2017.
 */
public enum AccountType {
    CASH("Cash"),
    MARGIN("Margin");

    private final String description;

    AccountType(String description) {
        this.description = description;
    }

    public static AccountType typeOf(String description) {
        for (AccountType accountType : values()) {
            if (accountType.getDescription().equals(description)) {
                return accountType;
            }
        }
        throw new IllegalArgumentException("Invalid description");
    }

    public String getDescription() {
        return description;
    }
}
