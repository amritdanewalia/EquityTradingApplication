package web.services.data;

/**
 * Created by adanew on 6/9/2017.
 */
public enum EquityType {
    RELIANCE("RELIANCE"),
    HDFC("HDFC"),
    MARUTI("MARUTI"),
    TATASTEEL("TATASTEEL"),
    WIPRO("WIPRO"),
    ITC("ITC"),
    TATAPOWER("TATAPOWER"),
    GAIL("GAIL"),
    TECH_MAHINDRA("TECHM"),
    HINDALCO("HINDALCO"),
    YESBANK("YESBANK");

    private final String description;

    EquityType(String description) {
        this.description = description;
    }

    public String getDescription() {
        return description;
    }
}
