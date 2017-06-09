package web.services;

import web.services.data.EquityType;

import java.util.List;

/**
 * Created by adanew on 6/9/2017.
 */
public interface GoogleFinanceApi {

    String getEquities(List<EquityType> equityTypes);
}
