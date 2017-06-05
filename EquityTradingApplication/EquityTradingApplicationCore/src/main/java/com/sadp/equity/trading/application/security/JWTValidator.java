package com.sadp.equity.trading.application.security;

/**
 * Created by adanew on 6/5/2017.
 */
public interface JWTValidator {

    String createJWT();

    boolean validateJWT(String token);
}
