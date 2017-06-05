package com.sadp.equity.trading.application.security.filter;

import com.sadp.equity.trading.application.security.JWTValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.filter.RequestContextFilter;

import javax.annotation.Priority;
import javax.inject.Singleton;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.Priorities;
import javax.ws.rs.core.Response;
import java.io.IOException;

/**
 * Created by adanew on 6/5/2017.
 */
@Component
@Singleton
@Priority(Priorities.AUTHENTICATION)
public class JWTAuthFilter extends RequestContextFilter {

    @Autowired
    private JWTValidator jwtValidator;

    @Override
    @CrossOrigin
    protected void doFilterInternal(
            HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {

        String authHeaderVal = request.getHeader("Authorization");
        //consume JWT i.e. execute signature validation
        if (!StringUtils.isEmpty(authHeaderVal) && authHeaderVal.startsWith("Bearer")) {
            String token = authHeaderVal.split(" ")[1];
            if (!jwtValidator.validateJWT(token)) {
                response.setHeader("Access-Control-Allow-Origin", request.getHeader("Origin"));
                response.sendError(Response.Status.UNAUTHORIZED.getStatusCode());
            }
        }

        super.doFilterInternal(request, response, filterChain);
    }
}