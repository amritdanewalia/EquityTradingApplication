package web.services;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import web.services.data.EquityType;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by adanew on 6/9/2017.
 */
@Service
public class GoogleFinanceApiImpl implements GoogleFinanceApi {

    @Override
    public String getEquities(List<EquityType> equityTypes) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject("http://finance.google.com/finance/info?client=ig&q= " + StringUtils.join(getEquityDescriptions(equityTypes), ','), String.class);
    }

    private List<String> getEquityDescriptions(List<EquityType> equityTypes) {
        List<String> equityDescriptions = new ArrayList<>();
        for (EquityType equityType : equityTypes) {
            equityDescriptions.add(equityType.getDescription());
        }
        return equityDescriptions;
    }
}
