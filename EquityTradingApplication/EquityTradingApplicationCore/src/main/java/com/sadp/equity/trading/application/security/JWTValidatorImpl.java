package com.sadp.equity.trading.application.security;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTVerificationException;
import org.springframework.stereotype.Component;

import java.io.UnsupportedEncodingException;


/**
 * Created by adanew on 6/5/2017.
 */
@Component
public class JWTValidatorImpl implements JWTValidator {

    @Override
    public String createJWT() {
        String token;
        try {
            Algorithm algorithm = Algorithm.HMAC256("secret");
            token = JWT.create()
                    .withIssuer("auth0")
                    .sign(algorithm);
        } catch (UnsupportedEncodingException exception) {
            throw new RuntimeException(exception);
            //UTF-8 encoding not supported
        } catch (JWTCreationException exception) {
            throw new RuntimeException(exception);
            //Invalid Signing configuration / Couldn't convert Claims.
        }
        return token;
    }

    @Override
    public boolean validateJWT(String token) {
        try {
            Algorithm algorithm = Algorithm.HMAC256("secret");
            JWTVerifier verifier = JWT.require(algorithm)
                    .withIssuer("auth0")
                    .build(); //Reusable verifier instance
            verifier.verify(token);
        } catch (UnsupportedEncodingException exception) {
            return false;
        } catch (JWTVerificationException exception) {
            return false;
        }
        return true;
    }
}
