package com.sadp.equity.trading.application.controlller.orders;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.math.BigDecimal;

/**
 * Created by adanew on 6/14/2017.
 */
public class OrderBean {
    private final long orderId;
    private final long equityId;
    private final String symbol;
    private final BigDecimal price;
    private final String side;
    private final String orderType;
    private final String traderUserName;
    private final String accountType;
    private final String portfolio;
    private final long quantity;
    private final String comments;


    @JsonCreator
    public OrderBean(@JsonProperty("orderId") long orderId, @JsonProperty("equityId") long equityId, @JsonProperty("symbol") String symbol, @JsonProperty("price") BigDecimal price, @JsonProperty("side") String side, @JsonProperty("orderType") String orderType, @JsonProperty("traderUserName") String traderUserName, @JsonProperty("accountType") String accountType, @JsonProperty("portfolio") String portfolio, @JsonProperty("quantity") long quantity, @JsonProperty("comments") String comments) {
        this.orderId = orderId;
        this.equityId = equityId;
        this.symbol = symbol;
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

    public String getSymbol() {
        return symbol;
    }

    public long getOrderId() {
        return orderId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        OrderBean orderBean = (OrderBean) o;

        if (equityId != orderBean.equityId) return false;
        if (quantity != orderBean.quantity) return false;
        if (symbol != null ? !symbol.equals(orderBean.symbol) : orderBean.symbol != null) return false;
        if (price != null ? !price.equals(orderBean.price) : orderBean.price != null) return false;
        if (side != null ? !side.equals(orderBean.side) : orderBean.side != null) return false;
        if (orderType != null ? !orderType.equals(orderBean.orderType) : orderBean.orderType != null) return false;
        if (traderUserName != null ? !traderUserName.equals(orderBean.traderUserName) : orderBean.traderUserName != null)
            return false;
        if (accountType != null ? !accountType.equals(orderBean.accountType) : orderBean.accountType != null)
            return false;
        if (portfolio != null ? !portfolio.equals(orderBean.portfolio) : orderBean.portfolio != null) return false;
        return comments != null ? comments.equals(orderBean.comments) : orderBean.comments == null;

    }

    @Override
    public int hashCode() {
        int result = (int) (equityId ^ (equityId >>> 32));
        result = 31 * result + (symbol != null ? symbol.hashCode() : 0);
        result = 31 * result + (price != null ? price.hashCode() : 0);
        result = 31 * result + (side != null ? side.hashCode() : 0);
        result = 31 * result + (orderType != null ? orderType.hashCode() : 0);
        result = 31 * result + (traderUserName != null ? traderUserName.hashCode() : 0);
        result = 31 * result + (accountType != null ? accountType.hashCode() : 0);
        result = 31 * result + (portfolio != null ? portfolio.hashCode() : 0);
        result = 31 * result + (int) (quantity ^ (quantity >>> 32));
        result = 31 * result + (comments != null ? comments.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "OrderBean{" +
                "equityId=" + equityId +
                ", symbol='" + symbol + '\'' +
                ", price=" + price +
                ", side='" + side + '\'' +
                ", orderType='" + orderType + '\'' +
                ", traderUserName='" + traderUserName + '\'' +
                ", accountType='" + accountType + '\'' +
                ", portfolio='" + portfolio + '\'' +
                ", quantity=" + quantity +
                ", comments='" + comments + '\'' +
                '}';
    }
}
