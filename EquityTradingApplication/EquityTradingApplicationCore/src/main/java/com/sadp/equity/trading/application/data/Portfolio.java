package com.sadp.equity.trading.application.data;

/**
 * Created by adanew on 6/16/2017.
 */
public enum Portfolio {

    AGGRESSIVE_PORTFOLIO("Aggressive Portfolio"),
    DEFENSIVE_PORTFOLIO("Defensive Portfolio"),
    INCOME_PORTFOLIO("Income Portfolio"),
    SPECULATIVE_PORTFOLIO("Speculative Portfolio"),
    HYBRID_PORTFOLIO("Hybrid Portfolio");

    private final String description;

    Portfolio(String description) {
        this.description = description;
    }

    public static Portfolio typeOf(String description) {
        for (Portfolio portfolio : values()) {
            if (portfolio.getDescription().equals(description)) {
                return portfolio;
            }
        }
        throw new IllegalArgumentException("Invalid description");
    }

    public String getDescription() {
        return description;
    }
}

